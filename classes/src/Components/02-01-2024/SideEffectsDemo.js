import { useEffect, useState } from "react";
import axios from "axios";

const SideEffectsDemo = () => {
  console.log("Hi there i'm side effects demo component");
  // useEffect(callbackFn, dependencyArray);
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState("DARK");
  const [testBoolean, setTestBoolean] = useState(true);

  const getUsersList = async () => {
    // try {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    //   const data = await response.json();
    //   console.log(data);
    // } catch (err) {
    //   console.log(err);
    // }
    const encodedParams = new URLSearchParams();
    encodedParams.set("source_language", "en");
    encodedParams.set("target_language", "id");
    encodedParams.set("text", "What is your name?");

    const response = axios.post(
      "https://text-translator2.p.rapidapi.com/translate?source_language=en&target_language=en&text=how are you",
      {}
    );
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(response.data);
      // setData(dummyResponse);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsersList();
    // fetch("https://jsonplaceholder.typicode.com/todos")
    // .then()
    // .then()
    // .catch()
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [theme, testBoolean]);

  const onIncreaseCounter = () => {
    setCounter(counter + 1);
  };

  const onThemeChange = () => {
    if (theme === "DARK") {
      setTheme("LIGHT");
    } else {
      setTheme("DARK");
    }
  };

  const onBooleanChange = () => {
    if (testBoolean) {
      setTestBoolean(false);
    } else {
      setTestBoolean(true);
    }
  };

  return (
    <>
      <h1>SideEffectsDemo</h1>
      {counter} <br />
      <button onClick={onIncreaseCounter}>Increase Counter +</button>
      <hr />
      Theme : {theme}
      <button onClick={onThemeChange}>Change Theme</button>
      <hr />
      Boolean Values : {String(testBoolean)}
      <button onClick={onBooleanChange}>Toggle Boolean</button>
    </>
  );
};

export default SideEffectsDemo;

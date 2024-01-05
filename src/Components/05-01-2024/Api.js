import axios from "axios";
import { useEffect, useState } from "react";

const Api = () => {
  useEffect(() => {
    // Fetched the data for health
    const fetchData = async () => {
      //   const options = {
      //     method: "GET",
      //     url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
      //     params: { limit: "10" },
      //     headers: {
      //       "X-RapidAPI-Key":
      //         "efe577231amsh203f1bad1649aabp136ba4jsnb3225ae50d8a",
      //       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      //     },
      //   };

      //   try {
      //     const response = await axios.request(options);
      //     console.log(response.data);
      //   } catch (error) {
      //     console.error(error);
      //   }
      // Syntax : axios.get(api-url, config-object)
      const response = await axios.get(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
        {
          params: {
            limit: 50,
            offset: 5,
          },
          headers: {
            "X-RapidAPI-Key":
              "efe577231amsh203f1bad1649aabp136ba4jsnb3225ae50d8a",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        }
      );
      console.log(response.data);
    };
    // fetchData();

    const bodyObj = { inputs: "Astronaut riding a horse" };
    const configObj = {
      headers: {
        Authorization: "Bearer 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",
      },
    };
    // Syntax : axios.post(api-url, body-object, config-object)
    const getImageData = async () => {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
        bodyObj,
        configObj
      );
      console.log(response.data);
    };

    // getImageData();
  }, []);

  const [passwordLength, setPasswordLength] = useState(0);
  const onPasswordChange = (e) => {
    // console.log(e.target.value);
    setPasswordLength(e.target.value);
  };

  setTimeout(() => {
    setPasswordLength(50);
  }, 5_000);

  const [isVisible, setVisible] = useState(false);

  const onVisibilityChange = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <>
      <h1>API Call</h1>
      <label htmlFor="passwordLength">Password Length</label>
      <input
        value={passwordLength}
        onChange={onPasswordChange}
        id="passwordLength"
        type="number"
      />
      <button onClick={onVisibilityChange}>Toggle Visibility</button>
      {isVisible ? (
        <p>
          lorem ipsum dor sit amet lorem ipsum dor sit amet lorem ipsum dor sit
          amet lorem ipsum dor sit amet lorem ipsum dor sit amet{" "}
        </p>
      ) : (
        <p>this is visible when the visibility is set to false</p>
      )}

      {
        isVisible && (
            <h1>Visible with help of && operator</h1>
        )
      }
    </>
  );
};

export default Api;

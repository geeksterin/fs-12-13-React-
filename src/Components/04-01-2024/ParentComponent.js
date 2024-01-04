import { useState, useCallback, useRef } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  console.log("Parent Rendering");
  const [parentCounter, setParentCounter] = useState(0);
  const [childCounter, setChildCounter] = useState(0);
  const [data, setData] = useState({
    name: "ABC",
  });
  const inputRef = useRef(null);

  const onFoucsClick = () => {
    setTimeout(() => {
      const input = document.getElementById("inputField");
      // input.value;
      //   input.focus();
      inputRef.current.focus();
      console.log(inputRef.current.value);
      inputRef.current.value = "Hi There!!!";
    }, 3_000);
  };

  const increaseParentCounter = () => {
    // setParentCounter((oldParentCounter) => oldParentCounter + 1);
    setParentCounter(parentCounter + 1);
  };

  const increaseChildCounter = useCallback(() => {
    setChildCounter(childCounter + 1);
  }, [childCounter]);
  // Syntax : const fn = useCallback(fn,dependencyArray)
  /**
   * [] => Once
   * no array => Every time
   * [variable] => Updates only if the varible changes
   */

  return (
    <>
      <h1>Parent Component</h1>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      <button onClick={onFoucsClick}>Focus on Input Field</button>
      Parent Counter {parentCounter} <br />
      <button onClick={increaseParentCounter}>Increase Parent Counter</button>
      <button onClick={increaseChildCounter}>Increase Child Counter</button>
      <ChildComponent
        increaseChildCounter={increaseChildCounter} // Non primitive prop
        childCounter={childCounter}
        data={data}
      />
    </>
  );
};

export default ParentComponent;

import { useState } from "react";

const Counter = () => {
  //   let counter = 0;
  // Syntax
  // let [getterVariableName, setterFunction] = useState(initial-value);

  let [counter, setCounter] = useState(0); // declaration
  let [userName, setUserName] = useState("John");
  let [student, setStudent] = useState({
    rollNo: 123,
    name: "ABC",
    bloodGroup: "A+",
  });

  //   counter = 50; // COMPLETELY AVOID THIS

  const onCounterDecrease = () => {
    // console.log("Decrease button clicked");
    const updatedValue = counter - 1;
    setCounter(updatedValue);
  };

  const onCounterIncrease = () => {
    // console.log("Increase button clicked");
    const updatedValue = counter + 1;
    setCounter(updatedValue);
  };

  const onUserNameUpdate = () => {
    console.log("User name update btn clicked");
    let updatedName = "John";
    if (userName === "John") {
      updatedName = "Peter";
    }
    setUserName(updatedName);
  };

  const onStudentNameUpdate = () => {
    const updateObject = { ...student }; // WAY 1
    updateObject.name = "XYZ"; // WAY 1

    // const updateObject = { ...student, name: "XYZ" }; // WAY 2
    setStudent(updateObject);
  };

  return (
    <div>
      <h1>Counter Component</h1>
      <h1>Exp 1</h1>
      <div style={{ fontSize: "30px" }}>{counter}</div>
      <div>
        <button id="decBtn" onClick={onCounterDecrease}>
          Decrease
        </button>
        <button id="incBtn" onClick={onCounterIncrease}>
          Increase
        </button>
        <hr />
        <h1>Exp 2</h1>
        Name : {userName}
        <br />
        <button onClick={onUserNameUpdate}>Toggle Name</button>
        <hr />
        <h1>Exp 3</h1>
        <h2>Student Details</h2>
        Name = {student.name} <br />
        Blood Group = {student.bloodGroup}
        <button onClick={onStudentNameUpdate}>Update Student Name</button>
      </div>
    </div>
  );
};

export default Counter;

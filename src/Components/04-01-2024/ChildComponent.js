import { memo } from "react";

const ChildComponent = (props) => {
  console.log("Child Rendering");
  return (
    <>
      <h2>Child Component</h2>
      Child Counter {props.childCounter}
    </>
  );
};

export default memo(ChildComponent);

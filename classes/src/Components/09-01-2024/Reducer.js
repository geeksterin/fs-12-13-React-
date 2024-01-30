import { useState, useReducer } from "react";

const TYPES = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  MULTIPLY: "MULTIPLY",
  DIVIDE: "DIVIDE",
};

const counterReducer = (initState, action) => {
  console.log("initState => ", initState);
  console.log("action =>", action);
  switch (action.type) {
    case TYPES.INCREASE:
      return initState + action.payload;
    case TYPES.DECREASE:
      return initState - action.payload;
    case TYPES.MULTIPLY:
      return initState * action.payload;
    case TYPES.DIVIDE:
      return initState / action.payload;
    default:
      return initState;
  }
};

const Reducer = () => {
  //   const [counter, setCounter] = useState(0);
  // useReducer(reducerFn,initValue)

  const [counter, dispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <h1>useReducer Hook</h1>
      {counter}
      <div>
        <button onClick={() => dispatch({ type: TYPES.INCREASE, payload: 1 })}>
          +1
        </button>
        <button onClick={() => dispatch({ type: TYPES.DECREASE, payload: 1 })}>
          -1
        </button>
        <button onClick={() => dispatch({ type: TYPES.INCREASE, payload: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch({ type: TYPES.DECREASE, payload: 5 })}>
          -5
        </button>
        <button onClick={() => dispatch({ type: TYPES.MULTIPLY, payload: 2 })}>
          *2
        </button>
        <button onClick={() => dispatch({ type: TYPES.DIVIDE, payload: 3 })}>
          /3
        </button>
      </div>
    </>
  );
};

export default Reducer;

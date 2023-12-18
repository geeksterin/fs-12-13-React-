import { useState } from "react";

const ProductCard = (props) => {
  const [count, setCount] = useState(0);

  const onIncreaseCount = () => {
    setCount(count + 1);
    props.onCartUpdate("INCREASE");
  };

  const onDecreaseCount = () => {
    setCount(count - 1);
    props.onCartUpdate("DECREASE");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "150px",
        border: "1px solid black",
        boxShadow: "2px 2px 2px solid grey",
      }}
    >
      <div>
        <img />
        {props.productName}
        <div>
          <button onClick={onDecreaseCount}>Decrease</button>
          Product Count = {count}
          <button onClick={onIncreaseCount}>Increase</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

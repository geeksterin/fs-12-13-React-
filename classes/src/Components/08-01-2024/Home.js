import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const onChangeCount = () => {
    for (let i = 0; i <= 5; i++) {
      console.log("Loop ran", i);
      // setCount(count + 1);
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <h1>This is home page</h1>
      {count}
      <button onClick={onChangeCount}>Change Count</button>
      {/* <a href="/contact">Contact</a> */}
      <Link to="/contact">Contact Us</Link> <br />
      <Link to="/about">About Us</Link>
      <Link to="/hotel/123">Hotel 123</Link>
    </>
  );
};

export default Home;

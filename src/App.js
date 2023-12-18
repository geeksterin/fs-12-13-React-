import { useState } from "react";
import "./App.css";

import Card1 from "./Components/18-12-2023/Card1";
import Card2 from "./Components/18-12-2023/Card2";
import Header from "./Components/18-12-2023/Header";
import ProductCard from "./Components/18-12-2023/ProductCard";

const productList = [
  {
    id: "rec1JZlfCIBOPdcT2",
    title: "Samsung Galaxy S8",
    price: "399.99",
    img: "https://www.course-api.com/images/cart/phone-1.png",
    amount: 1,
  },
  {
    id: "recB6qcHPxb62YJ75",
    title: "google pixel",
    price: "499.99",
    img: "https://www.course-api.com/images/cart/phone-2.png",
    amount: 1,
  },
  {
    id: "recdRxBsE14Rr2VuJ",
    title: "Xiaomi Redmi Note 2",
    price: "699.99",
    img: "https://www.course-api.com/images/cart/phone-3.png",
    amount: 1,
  },
  {
    id: "recwTo160XST3PIoW",
    title: "Samsung Galaxy S7",
    price: "599.99 ",
    img: "https://www.course-api.com/images/cart/phone-4.png",
    amount: 1,
  },
];

function App() {
  // const [counter, setCounter] = useState(0);
  const [totalCartCount, setTotalCartCount] = useState(0);
  // const increaseCounterFn = (input1) => {
  //   // console.log(input1);
  //   console.log("Increase counter fn from app.js");
  //   // setCounter(counter + 1);
  // };

  const onCartUpdate = (type) => {
    if (type === "INCREASE") {
      setTotalCartCount(totalCartCount + 1);
    } else if (type === "DECREASE") {
      setTotalCartCount(totalCartCount - 1);
    }
  };

  return (
    <div className="App">
      <Header totalCartCount={totalCartCount} />
      <ProductCard
        productName={productList[0].title}
        onCartUpdate={onCartUpdate}
      />
      <ProductCard
        productName={productList[1].title}
        onCartUpdate={onCartUpdate}
      />
      <ProductCard
        productName={productList[2].title}
        onCartUpdate={onCartUpdate}
      />
      
      {/* <Card1 increaseCounter={increaseCounterFn} /> */}
      {/* <Card2 /> */}
      {/* Counter = {counter} */}
    </div>
  );
}

export default App;

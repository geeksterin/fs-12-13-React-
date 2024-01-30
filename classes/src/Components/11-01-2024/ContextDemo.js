import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/UserContext";
import Content from "./Content";
import Header from "./Header";

const ContextDemo = () => {
  const navigate = useNavigate();
  const onBtnClick = () => {
    console.log("Btn clicked");
    // Call the  API
    // Wait for its result
    // If the result is success
    // Redirect the user to /about-us
    navigate("/hotel/1", {
      state: {
        name: "XYZ",
        address: "123",
        mobNo: "123456",
        bloodGroup: "AB-",
      },
    });
    setTimeout(() => {}, 5_000);
  };
  return (
    <>
      <h1>Context API Demo</h1>
      <button onClick={onBtnClick}>Click here</button>
      <Header />
      <ProductContext.Provider>
        <Content />
      </ProductContext.Provider>
    </>
  );
};

export default ContextDemo;

import { ProductContext } from "../../context/UserContext";
import Content from "./Content";
import Header from "./Header";

const ContextDemo = () => {
  return (
    <>
      <h1>Context API Demo</h1>
      <Header />
      <ProductContext.Provider>
        <Content />
      </ProductContext.Provider>
    </>
  );
};

export default ContextDemo;

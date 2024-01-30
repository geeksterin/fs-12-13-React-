import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Article = () => {
  const userCtx = useContext(UserContext);
  console.log("userCtx", userCtx);

  const onAddressUpdate = () => {
    userCtx.setUser({
      ...userCtx.user,
      address: "123 Chandani Chowk, New Delhi",
    });
  };

  return (
    <>
      <h1>Article Component</h1>
      <h2>User : {userCtx.user.name}</h2>
      <button onClick={onAddressUpdate}>Update Address</button>
    </>
  );
};

export default Article;

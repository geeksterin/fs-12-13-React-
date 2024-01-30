import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const userCtx = useContext(UserContext);
  console.log("userCtx", userCtx);

  const onNameUpdate = () => {
    userCtx.setUser({
      ...userCtx.user,
      name: "John Doe",
    });
  };

  return (
    <>
      <h1>Header Component</h1>
      <button onClick={onNameUpdate}>Update Name</button>
      <h2>User Address : {userCtx.user.address}</h2>
    </>
  );
};

export default Header;

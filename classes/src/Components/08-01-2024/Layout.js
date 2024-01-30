import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>This is website header</header>
      <Outlet />
      <footer>This is website footer</footer>
    </>
  );
};

export default Layout;

import "./App.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ContextDemo from "./Components/11-01-2024/ContextDemo";
import { UserContext } from "./context/UserContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ContextDemo />,
    },
  ]);

  const [user, setUser] = useState({
    name: "",
    age: 0,
    address: "",
  });

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;

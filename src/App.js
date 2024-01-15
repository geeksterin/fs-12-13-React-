import "./App.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";

import ContextDemo from "./Components/11-01-2024/ContextDemo";
import { UserContext } from "./context/UserContext";
import HotelDetails from "./Components/08-01-2024/HotelDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ContextDemo />,
      errorElement: <h1>Error element screen for not found</h1>,
    },
    {
      path: "/about-us",
      element: <h1>About us page</h1>,
    },
    {
      path: "/hotel/:hotelId",
      element: <HotelDetails />
    }
    // {
    //   path: "*",
    //   element: <h1>Page not found</h1>,
    // },
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

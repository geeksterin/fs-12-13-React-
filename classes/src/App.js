import "./App.css";
import { useState, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";

import ContextDemo from "./Components/11-01-2024/ContextDemo";
import { UserContext } from "./context/UserContext";
import HotelDetails from "./Components/08-01-2024/HotelDetails";
import ParentComponent from "./Components/04-01-2024/ParentComponent";
import ClassesDemo from "./Components/30-01-2024/ClassesDemo";
// import Optimization from "./Components/22-01-2024/Optimization";
// import Settings from "./Components/22-01-2024/Settings"; // Normal Import

const Optimization = lazy(() => import("./Components/22-01-2024/Optimization"));

const Settings = lazy(() =>
  delayForDemo(import("./Components/22-01-2024/Settings"))
); // Lazy Import

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ClassesDemo name="John" />,
      errorElement: <h1>Error element screen for not found</h1>,
    },
    {
      path: "/settings",
      element: <Settings />,
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
        <Suspense fallback={<h1>Loading....</h1>}>
          <RouterProvider router={router} />
        </Suspense>
      </UserContext.Provider>
    </div>
  );
}

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 4000);
  }).then(() => promise);
}

export default App;

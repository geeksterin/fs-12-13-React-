import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Reducer from "./Components/09-01-2024/Reducer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Reducer />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

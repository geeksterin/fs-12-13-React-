import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/08-01-2024/Home";
import AboutUs from "./Components/08-01-2024/AboutUs";
import ContactUs from "./Components/08-01-2024/ContactUs";
import Testimonial from "./Components/08-01-2024/Testimonial";
import Settings from "./Components/08-01-2024/Settings";
import HotelDetails from "./Components/08-01-2024/HotelDetails";
import RouteError from "./Components/08-01-2024/RouteError";
import Layout from "./Components/08-01-2024/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <RouteError />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/testimonial",
          element: <Testimonial />,
        },
        {
          path: "/settings",
          element: <Settings />,
          // children: [
          //   {
          //     path: "general",
          //     element: <h1>This is General Settings page</h1>,
          //   },
          //   {
          //     path: "/privacy",
          //     element: <h1>This is Privacy Settings page</h1>,
          //   },
          // ],
        },
      ],
    },
    {
      path: "/hotel/:hotelId",
      element: <HotelDetails />,
    },

    // {
    //   path: "*",
    //   element: <h1>This is 404 page</h1>,
    // },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

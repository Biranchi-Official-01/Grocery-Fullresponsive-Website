import React from "react";
import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./Components/Fruits/Fruits";
import Dairy from "./Components/Dairy/Dairy";
import Seafood from "./Components/Seafood/Seafood";
import AllProducts from "./Components/AllProducts/AllProducts";
import Layout from "./Components/Layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seafood",
          element: <Seafood />,
        },
        {
          path: "/allproducts",
          element: <AllProducts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./components";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./Layout";
import Purchases from "./components/Purchases/Purchases";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/bau/dashboard",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "/bau/dashboard/purchases",
          element: <Purchases />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

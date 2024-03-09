import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./components";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/layout",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
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

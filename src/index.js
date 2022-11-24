import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import Invoices from "./Invoices";
import Create from "./Create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Invoices />,
  },
  {
    path: "/create",
    element: <Create />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import FunctionsPage from "./pages/functions-page";
import SingleFunctionPage from "./pages/single-func-page";
import ErrorBoundary from "./Components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FunctionsPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/function/:functionName",
    element: <SingleFunctionPage />,
    errorElement: <ErrorBoundary />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

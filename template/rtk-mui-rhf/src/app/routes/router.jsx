import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Login";
import PageNotFound from "../../pages/PageNotFound";
import Dashboard from "../../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "",
    element: <Dashboard />,
  },
  { path: "login", element: <Login /> },
]);

import { createBrowserRouter, Navigate } from "react-router-dom";
import { LayOut } from "../views/layout/LayOut";
import { Home } from "../views/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        // 用于重定向到 home page
        index: true,
        element: <Navigate to={"/home"} replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default router;

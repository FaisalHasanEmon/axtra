import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Services from "../pages/services/Services";
import Home from "../Pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
    ],
  },
]);
export default router;

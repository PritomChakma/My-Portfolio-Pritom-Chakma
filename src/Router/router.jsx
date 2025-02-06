import { createBrowserRouter } from "react-router-dom";
import Project_1 from "../Components/Project_1";
import Project_3 from "../Components/Project_3";
import Projects_2 from "../Components/Projects_2";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";

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
        path: "/project-one-details",
        element: <Project_1></Project_1>,
      },
      {
        path: "/project-two-details",
        element: <Projects_2></Projects_2>,
      },
      {
        path: "/project-three-details",
        element: <Project_3></Project_3>,
      },
    ],
  },
]);

export default router;

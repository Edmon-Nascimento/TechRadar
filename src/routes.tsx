import { createBrowserRouter } from "react-router-dom";
import  JobsPage  from "./pages/JobsPage";
import Layout from "./components/layout";

export const router = createBrowserRouter([

  {
    element:<Layout/>,
    children:
    [
      {
        path: "/",
        element: <JobsPage/>,
      }
    ]
  }
]);

import { createBrowserRouter } from "react-router-dom";
import  JobsPage  from "./pages/JobsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <JobsPage/>,
  },
]);

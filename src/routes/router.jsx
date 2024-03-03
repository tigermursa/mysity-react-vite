import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Dashboard from "../Components/Dashboard";
import Another from "../Components/Another";
import Development from "../pages/Development";
import Ui from "../pages/UI";
import Learning from "../pages/Learning";
import Ai from "../pages/AI";
import GitHub from "../pages/GitHub";
import News from "../pages/News";
import Others from "../pages/Others";
import Resume from "../pages/Resume";
import Search from "../pages/Search";
import AddWebsite from "../Components/Dashboard/AddWebsite";
import UpdateWebsite from "../Components/Dashboard/UpdateWebsite";
import TestingShow from "../Components/Dashboard/TestingShow";
import Google from "../pages/Google";
import ControlRoom from "../Components/Dashboard/ControlRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/another",
        element: <Another />,
      },
      {
        path: "/dev",
        element: <Development />,
      },
      {
        path: "/ui",
        element: <Ui />,
      },
      {
        path: "/learn",
        element: <Learning />,
      },
      {
        path: "/ai",
        element: <Ai />,
      },
      {
        path: "/git",
        element: <GitHub />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/others",
        element: <Others />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/add",
        element: <AddWebsite />,
      },
      {
        path: "/update",
        element: <UpdateWebsite />,
      },
      {
        path: "/test",
        element: <TestingShow />,
      },
      {
        path: "/google",
        element: <Google />,
      },
      {
        path: "/control",
        element: <ControlRoom />,
      },
    ],
  },
]);

export default router;

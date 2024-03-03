import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Dashboard from "../Components/Dashboard";
import Another from "../Components/Another";

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
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Movies from "./pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Movies />,
      },
    ],
  },
]);

export default router;

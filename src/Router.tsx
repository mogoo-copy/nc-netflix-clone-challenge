import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Movies from "./pages/Movies";
import Tvs from "./pages/Tvs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Movies />,
        children: [{ path: "movies/:movieId", element: null }],
      },
      {
        path: "tv",
        element: <Tvs />,
        children: [{ path: "tvs/:tvId", element: null }],
      },
    ],
  },
]);

export default router;

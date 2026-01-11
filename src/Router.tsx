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
        path: "tvs",
        element: <Tvs />,
        children: [{ path: ":tvId", element: null }],
      },
    ],
  },
]);

export default router;

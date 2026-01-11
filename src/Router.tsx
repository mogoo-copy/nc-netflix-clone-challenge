import { createHashRouter } from "react-router-dom";

import App from "./App";
import Movies from "./pages/Movies";
import Tvs from "./pages/Tvs";
import Search from "./pages/Search";

const router = createHashRouter([
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
      {
        path: "search",
        element: <Search />,
        children: [{ path: ":searchId", element: null }],
      },
    ],
  },
]);

export default router;

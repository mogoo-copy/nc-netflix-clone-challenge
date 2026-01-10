import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./Router.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

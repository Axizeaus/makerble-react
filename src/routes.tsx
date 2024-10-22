import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layouts/RootLayout";
import Home from "./pages/Home";
import Project from "./pages/Project";

import Organisations from "./pages/Organisations";
import Album from "./pages/Album";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "album",
        element: <Album />,
      },
      {
        path: "organisations",
        element: <Organisations />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layouts/RootLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Organisations from "./pages/Organisations";
import Album from "./pages/Album";
import Boards from "./pages/Boards";
import Explore from "./pages/Explore";

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
        path: "projects",
        element: <Projects />,
      },
      {
        path: "album",
        element: <Album />,
      },
      {
        path: "organisations",
        element: <Organisations />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "boards",
        element: <Boards />,
      },
    ],
  },
]);

export default router;

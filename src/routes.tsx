import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layouts/RootLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
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
    ],
  },
]);

export default router;

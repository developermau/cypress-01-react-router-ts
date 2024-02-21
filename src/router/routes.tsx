import { RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageA from "../pages/PageA";
import PageB from "../pages/PageB";

export const routes: RouteObject[] = [
  {
    id: "home-page",
    path: "/",
    element: <HomePage />,
  },
  {
    id: "page-a",
    path: "/page-a",
    element: <PageA />,
  },
  {
    id: "page-b",
    path: "/page-b",
    element: <PageB />,
  },
];

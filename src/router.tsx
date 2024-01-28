import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Register, Login } from "./components/pages";
import IdentityLayout from "./layouts/identity-layout";

export const routes: RouteObject[] = [
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

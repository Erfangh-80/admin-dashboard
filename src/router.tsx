import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Register, Login, registerAction } from "./components/pages";
import IdentityLayout from "./layouts/identity-layout";

export const routes: RouteObject[] = [
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

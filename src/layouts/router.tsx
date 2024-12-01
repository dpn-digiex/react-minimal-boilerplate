import { createBrowserRouter } from "react-router-dom";
import { ROUTES_APP } from "@constants";

import ProtectedLayout from "./protectedLayout";
import PublicLayout from "./publicLayout";

import LoginPage from "@pages/login";
import ErrorPage from "@pages/error";
import HomePage from "@pages/home";
import ProtectedPage from "@pages/protected";

const router = createBrowserRouter([
  {
    id: "public",
    path: ROUTES_APP.ROOT,
    Component: PublicLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: ROUTES_APP.LOGIN,
        Component: LoginPage,
      },
      // {
      //   path: ROUTES_APP.PAGE_ONE,
      //   Component: PageOne,
      // },
      // {
      //   path: ROUTES_APP.PAGE_TWO,
      //   Component: PageTwo,
      // },
    ],
  },
  {
    id: "protected",
    path: ROUTES_APP.PROTECTED,
    Component: ProtectedLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: ProtectedPage,
      },
    ],
  },
]);

export default router;

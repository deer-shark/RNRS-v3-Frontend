import React from "react";
import { Redirect } from "react-router-dom";
import loadable from "@loadable/component";
import NotFoundPage from "../pages/NotFoundPage";

const routes = {
  routes: [
    {
      path: "/",
      exact: true,
      render: () => <Redirect to="/index" />,
    },
    {
      path: "/index",
      component: loadable(() => import("../pages/IndexPage")),
    },
    {
      path: "/declare/:eventCode?",
      component: loadable(() => import("../pages/DeclarePage")),
    },
    {
      path: "/scan",
      component: loadable(() => import("../pages/ScanPage")),
    },
    {
      path: "/manageA",
      component: loadable(() => import("../pages/ManageAPage")),
    },
    {
      path: "/manageB",
      component: loadable(() => import("../pages/ManageBPage")),
    },
    {
      path: "/login",
      component: loadable(() => import("../pages/LoginPage")),
    },
    {
      path: "*",
      component: NotFoundPage,
    },
  ],
};

export default routes;

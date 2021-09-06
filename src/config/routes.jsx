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
      protected: true,
    },
    {
      path: "/manageDeclare",
      component: loadable(() => import("../pages/ManageDeclarePage")),
      protected: true,
    },
    {
      path: "/manageCheckin",
      component: loadable(() => import("../pages/ManageCheckinPage")),
      protected: true,
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

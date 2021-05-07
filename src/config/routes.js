import React from 'react';
import {Redirect} from 'react-router-dom';
import NotFoundPage from "../pages/NotFoundPage";
import DeclarePage from "../pages/DeclarePage";
import ScanPage from "../pages/ScanPage";
import ManageAPage from "../pages/ManageAPage";
import ManageBPage from "../pages/ManageBPage";
import LoginPage from "../pages/LoginPage";
import IndexPage from "../pages/IndexPage";

const routes = {
  routes: [
    {
      path: '/',
      exact: true,
      render: () => <Redirect to="/index"/>,
    },
    {
      path: '/index',
      component: IndexPage,
    },
    {
      path: '/declare',
      component: DeclarePage,
    },
    {
      path: '/scan',
      component: ScanPage,
    },
    {
      path: '/manageA',
      component: ManageAPage,
    },
    {
      path: '/manageB',
      component: ManageBPage,
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '*',
      component: NotFoundPage,
    },
  ]
};

export default routes;
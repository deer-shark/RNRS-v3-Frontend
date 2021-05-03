import {Redirect} from 'react-router-dom';
import testPage from "../pages/testPage"
import SignInSide from "../pages/SignInSide"
import NotFoundPage from "../pages/NotFoundPage";

const routes = {
  routes: [
    {
      path: '/',
      exact: true,
      render: () => <Redirect to="/index"/>,
    },
    {
      path: '/index',
      component: testPage,
    },
    {
      path: '/login',
      component: SignInSide,
    },
    {
      path: '*',
      component: NotFoundPage,
    },
  ]
};

export default routes;
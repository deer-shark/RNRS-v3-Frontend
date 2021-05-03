import {Redirect} from 'react-router-dom';
import testPage from "../pages/testPage"
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
      path: '*',
      component: NotFoundPage,
    },
  ]
};

export default routes;
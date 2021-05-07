import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routesConfig from './config/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/btn-rnrs.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far);

let {routes} = routesConfig;

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Header/>
        <div id="Main">
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </div>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

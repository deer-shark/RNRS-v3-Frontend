import React from 'react';
import {renderRoutes} from 'react-router-config';
import routesConfig from './config/routes';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Container} from '@material-ui/core';
import Navbar from "./components/Navbar";


class App extends React.Component {
  render() {
    let {routes} = routesConfig;
    return (
      <BrowserRouter>
        <Switch>
          <Navbar/>
          {/*<Container>
            {renderRoutes(routes)}
          </Container>*/}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

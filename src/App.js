import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routesConfig from './config/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/btn-rnrs.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import Menu from "./components/Menu";

let {routes} = routesConfig;

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/*<Header/>*/}
        <div className={'header-container'}>
          <div className={'banner-container'}/>
          <Container className={'nav-container font-weight-bold'} id={'navbar'}>
            <Navbar expand={'lg'} variant={'light'}>
              <Container>
                <Navbar.Brand href={'#'} id={'logo'}>鹿鯊工作室</Navbar.Brand>
                <Navbar.Brand href={'#'} id={'product'}>新，實名制進場系統。</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse id={'navbarNav'}>
                  <Menu/>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Container>
          <Container>
            {renderRoutes(routes)}
          </Container>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

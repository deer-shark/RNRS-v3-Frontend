import React from 'react';
import {Container, Navbar} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import Menu from "./Menu";
import {LinkContainer} from 'react-router-bootstrap';
import '../css/Header.css';

export default function Header() {
  console.log(useLocation().pathname);
  let custom = (useLocation().pathname === '/declare') ? ' custom' : '';
  return (
    <div className={'header-container'}>
      <div className={'banner-container'+custom}/>
      <Container className={'nav-container font-weight-bold'} id={'navbar'}>
        <Navbar expand={'lg'} variant={'light'}>
          <Container>
            <Navbar.Brand href={'https://deershark.com'} id={'logo'}>鹿鯊工作室</Navbar.Brand>
            <LinkContainer to="/index">
              <Navbar.Brand id={'product'}>新，實名制進場系統。</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle/>
            <Navbar.Collapse id={'navbarNav'}>
              <Menu/>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}
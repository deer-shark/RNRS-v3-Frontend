import React from 'react';
import {Container, Navbar} from "react-bootstrap";
import Menu from "./Menu";
import Background from '../img/2020_KSKG_XMAS3.jpg';
import {LinkContainer} from 'react-router-bootstrap';
import '../css/Header.css';

var bgStyle = {
  background: `url(${Background}) no-repeat fixed center center`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  width: '100%',
  height: '100%',
  position: 'fixed',
  zIndex: '-1',
  opacity: '0.5',
};

export default function Header() {
  return (
    <div className={'header-container'}>
      <div className={'banner-container'} style={bgStyle}/>
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
import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Menu from "./Menu";
import "../css/Header.css";
import StoreContext from "../store/StoreContext";

export default function Header() {
  const { state } = useContext(StoreContext);
  const { backgroundName } = state.app;

  let picName;
  if (useLocation().pathname.startsWith("/declare/")) {
    picName = backgroundName;
  } else {
    picName = "general.jpg";
  }
  const styleBanner = {
    background: `url(/img/${picName}) no-repeat fixed center center / cover`,
  };
  return (
    <div className="header-container">
      <div className="banner-container" style={styleBanner} />
      <Container className="nav-container font-weight-bold" id="navbar">
        <Navbar expand="lg" variant="light" className="pb-3">
          <Container>
            <Navbar.Brand href="https://deershark.com" id="logo">
              鹿鯊工作室
            </Navbar.Brand>
            <LinkContainer to="/index">
              <Navbar.Brand id="product">新，實名制進場系統。</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
            <Navbar.Collapse id="navbarNav">
              <Menu />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

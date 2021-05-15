import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Menu from "./Menu";
import "../css/Header.css";

function Header(props) {
  // const custom = useLocation().pathname === "/declare" ? " custom" : "";
  const { backgroundName } = props;
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
        <Navbar expand="lg" variant="light">
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

Header.propTypes = {
  backgroundName: PropTypes.string.isRequired,
};

const mapStateToProps = (store) => ({ backgroundName: store.backgroundName });

export default connect(mapStateToProps, null)(Header);

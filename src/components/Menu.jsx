import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <Nav className="mr-auto">
        <Nav.Item>
          <NavLink to="/declare" activeClassName="active" className="nav-link">
            <span className="nav-link-span">資料填報</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/scan" activeClassName="active" className="nav-link">
            <span className="nav-link-span">掃描</span>
          </NavLink>
        </Nav.Item>
      </Nav>
      <Nav className="ml-auto">
        {/* <NavDropdown title="管理">
          <NavLink to="/scan" activeClassName="active" className={'nav-link'}>
            <span className={'nav-link-span'}>掃描</span>
          </NavLink>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Item>
          <NavLink to="/manageA" activeClassName="active" className="nav-link">
            <span className="nav-link-span">管理A</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/manageB" activeClassName="active" className="nav-link">
            <span className="nav-link-span">管理B</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/login" activeClassName="active" className="nav-link">
            <span className="nav-link-span">登入</span>
          </NavLink>
        </Nav.Item>
      </Nav>
    </>
  );
}

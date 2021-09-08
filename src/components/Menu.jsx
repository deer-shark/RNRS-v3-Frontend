import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ExpiredStorage from "expired-storage";

export default function Menu() {
  const user = new ExpiredStorage().getJson("user");

  return (
    <>
      <Nav className="mr-auto">
        <Nav.Item>
          <NavLink to="/declare" activeClassName="active" className="nav-link">
            <span className="nav-link-span">資料填報</span>
          </NavLink>
        </Nav.Item>
        {!!user && (
          <Nav.Item>
            <NavLink to="/scan" activeClassName="active" className="nav-link">
              <span className="nav-link-span">掃描</span>
            </NavLink>
          </Nav.Item>
        )}
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
        {!!user && (
          <Nav.Item>
            <NavLink
              to="/manageDeclare"
              activeClassName="active"
              className="nav-link"
            >
              <span className="nav-link-span">填報管理</span>
            </NavLink>
          </Nav.Item>
        )}
        {!!user && (
          <Nav.Item>
            <NavLink
              to="/manageCheckin"
              activeClassName="active"
              className="nav-link"
            >
              <span className="nav-link-span">刷入管理</span>
            </NavLink>
          </Nav.Item>
        )}
        <Nav.Item>
          <NavLink to="/login" activeClassName="active" className="nav-link">
            <span className="nav-link-span">
              {user ? `${user.name}/登出` : "登入"}
            </span>
          </NavLink>
        </Nav.Item>
      </Nav>
    </>
  );
}

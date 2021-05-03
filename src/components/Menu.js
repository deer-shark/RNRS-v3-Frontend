import React from 'react';
import {Nav} from "react-bootstrap";

export default function Menu() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href={'#'} className={'nav-link active'}>
          <span className={'nav-link-span'}>活動填報</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={'#'} className={'nav-link'}>
          <span className={'nav-link-span'}>管理</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={'#'} className={'nav-link'}>
          <span className={'nav-link-span'}>項目</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={'#'} className={'nav-link'}>
          <span className={'nav-link-span'}>項目</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
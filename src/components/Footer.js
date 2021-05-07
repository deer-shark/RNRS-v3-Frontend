import React from 'react';
import {Container, Row} from "react-bootstrap";

export default function Footer() {
  return (
    <Container className={'footer-container'}>
      <Row className={'footer-container-card d-flex justify-content-center'} id={'copyright'}>
        Copyright © Deer Shark Technology Studio. All rights reserved
      </Row>
    </Container>
  );
}
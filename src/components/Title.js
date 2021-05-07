import React from 'react';
import {Container} from "react-bootstrap";

export default function Title(props) {
  return (
    <Container className={'title-container'}>
      <div className={'d-flex justify-content-center align-self-center'}>
        <h1 className={'title-container-title'}>{props.content}</h1>
      </div>
    </Container>
  );
}

/*
    <div className={'header-container-text d-flex justify-content-center align-self-center'}>
      <h2 className={'header-container-title'}>雄中雄女聯合耶誕晚會</h2>
    </div>
 */
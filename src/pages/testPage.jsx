import React from "react";
import { Container } from "react-bootstrap";
import Title from "../components/Title";
import Contact from "../components/Contact";

class TestPage extends React.Component {
  render() {
    return (
      <>
        <Title content="雄中雄女聯合耶誕晚會" />
        <Container className="info-container">
          <h2>身分資料填報</h2>
        </Container>
        <Contact />
      </>
    );
  }
}

export default TestPage;

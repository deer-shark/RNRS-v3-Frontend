import React from "react";
import { Container } from "react-bootstrap";
import Title from "../components/Title";
import Contact from "../components/Contact";

export default function DeclarePage() {
  return (
    <>
      <Title content="Stray 迷途" />
      <Container className="info-container">
        <h2>身分資料填報</h2>
      </Container>
      <Contact />
    </>
  );
}

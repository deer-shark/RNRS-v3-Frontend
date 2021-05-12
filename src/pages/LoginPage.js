import React from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import "../css/LoginPage.css";

export default function LoginPage() {
  return (
    <Container className="login-container">
      <LoginForm />
    </Container>
  );
}

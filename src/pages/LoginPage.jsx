import React from "react";
import { Container } from "react-bootstrap";
import ExpiredStorage from "expired-storage";
import { useHistory } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { Toast } from "../units/Alert";
import "../css/LoginPage.css";

export default function LoginPage() {
  const user = new ExpiredStorage().getJson("user");
  const history = useHistory();

  if (user) {
    const expiredStorage = new ExpiredStorage();
    expiredStorage.removeItem("access_token");
    expiredStorage.removeItem("user");
    history.push("/login");
    Toast.fire({
      icon: "success",
      title: `${user.name} 登出成功！`,
    });
  }

  return (
    <Container className="login-container">
      <LoginForm />
    </Container>
  );
}

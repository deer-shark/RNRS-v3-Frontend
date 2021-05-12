import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function LoginForm() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return account.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <h2>使用者登入</h2>
        <Form.Group size="lg" controlId="email">
          <Form.Label>帳號</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            /* value={account} */
            onChange={(e) => setAccount(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>密碼</Form.Label>
          <Form.Control
            type="password"
            /* value={password} */
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
          className="btn-rnrs"
        >
          登入
        </Button>
      </Form>
    </div>
  );
}

import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../components/Title";
import Contact from "../components/Contact";

export default function DeclarePage() {
  return (
    <>
      <Title content="Stray 迷途" />
      <Container className="info-container">
        <Form>
          <h2>身分資料填報</h2>
          <Row className="quention-part">
            <Col className="col-12">
              <h3>活動資訊</h3>
            </Col>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="form-register-time">
                  <FontAwesomeIcon icon="clock" /> 時間
                </Form.Label>
                <Form.Control
                  type="text"
                  id="form-register-time"
                  placeholder="系統自動填入，請勿更動"
                  value="2021/05/23"
                  disabled
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="form-register-location">
                  <FontAwesomeIcon icon="location-arrow" /> 地點
                </Form.Label>
                <Form.Control
                  type="text"
                  id="form-register-location"
                  placeholder="系統自動填入，請勿更動"
                  value="高師大"
                  disabled
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="quention-part">
            <Col className="col-12">
              <h3>身分別</h3>
            </Col>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="form-register-org">
                  <FontAwesomeIcon icon="school" /> 單位
                </Form.Label>
                <Form.Control as="select" id="form-register-org">
                  <option value="" disabled selected>
                    請選擇學校
                  </option>
                  <option value="FSSH">鳳山高中 FSSH</option>
                  <option value="SMHS">三民高中 SMHS</option>
                  <option value="CJHS">前鎮高中 CJHS</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="form-register-role">
                  <FontAwesomeIcon icon="user-tie" /> 角色
                </Form.Label>
                <Form.Control as="select" id="form-register-role">
                  <option value="" disabled selected>
                    請選擇角色
                  </option>
                  <option>社員</option>
                  <option>非社員</option>
                  <option>特邀</option>
                  <option>教師</option>
                  <option>家長</option>
                  <option>訪客</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="quention-part">
            <Col className="col-12">
              <h3>個人資訊</h3>
            </Col>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="form-register-name">
                  <FontAwesomeIcon icon="user" /> 姓名
                </Form.Label>
                <Form.Control
                  type="text"
                  id="form-register-name"
                  placeholder="姓名"
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="form-register-idcard">
                  <FontAwesomeIcon icon="id-card" /> 身分證字號
                </Form.Label>
                <Form.Control
                  type="text"
                  id="form-register-idcard"
                  placeholder="身分證字號"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="quention-part">
            <Col className="col-12">
              <h3>聯絡管道</h3>
            </Col>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="form-register-phone">
                  <FontAwesomeIcon icon="mobile-alt" /> 行動電話
                </Form.Label>
                <Form.Control
                  type="text"
                  id="form-register-phone"
                  placeholder="行動電話"
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="form-register-email">
                  <FontAwesomeIcon icon="envelope" /> 電子郵件
                </Form.Label>
                <Form.Control
                  type="text"
                  id="form-register-email"
                  placeholder="電子郵件"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="btn-rnrs"
                block
                size="lg"
                href="#info-cdc-healthy"
              >
                前往下一步：健康聲明書
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container className="info-container">
        <h2>健康聲明書</h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScuX6nkwXyRCq_ldYt-DMtBZlhYxHOP2ZD26xEB8bPNUz6D7g/viewform?embedded=true"
          height="400"
          width="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="健康聲明書"
        >
          載入中…
        </iframe>
      </Container>
      <Contact />
    </>
  );
}

import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Title from "./Title";
import * as actionCreators from "../redux/action";

function DeclareForm(props) {
  const { setBackground, event } = props;

  useEffect(() => {
    setBackground(event.backgroundImage);
  });

  return (
    <>
      <Title content={event.name} />
      <Container className="info-container">
        <Form>
          <h2>身分資料填報</h2>
          <Row className="question-part">
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
                  value={event.date}
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
                  value={event.location}
                  disabled
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="question-part">
            <Col className="col-12">
              <h3>身分別</h3>
            </Col>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="form-register-org">
                  <FontAwesomeIcon icon="school" /> 單位
                </Form.Label>
                <Form.Control
                  as="select"
                  id="form-register-org"
                  defaultValue=""
                >
                  <option value="" disabled>
                    請選擇單位
                  </option>
                  {/* eslint-disable-next-line react/prop-types */}
                  {event.orgs.map((item) => (
                    <option value={item.value}>{item.text}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="form-register-role">
                  <FontAwesomeIcon icon="user-tie" /> 角色
                </Form.Label>
                <Form.Control
                  as="select"
                  id="form-register-role"
                  defaultValue=""
                >
                  <option value="" disabled>
                    請選擇角色
                  </option>
                  {/* eslint-disable-next-line react/prop-types */}
                  {event.roles.map((item) => (
                    <option value={item.value}>{item.text}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="question-part">
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
              {event.idcard && (
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
              )}
            </Col>
          </Row>
          <Row className="question-part">
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
      {event.advancedForm && (
        <Container className="info-container">
          <h2>健康聲明書</h2>
          <iframe
            src={event.googleFormSrc}
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
      )}
    </>
  );
}

DeclareForm.propTypes = {
  setBackground: PropTypes.func.isRequired,
  event: PropTypes.arrayOf(
    PropTypes.shape({
      eventId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      idcard: PropTypes.bool.isRequired,
      advancedForm: PropTypes.bool.isRequired,
      googleFormSrc: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      orgs: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        })
      ).isRequired,
      roles: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default connect(null, actionCreators)(DeclareForm);

import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Title from "./Title";
import StoreContext from "../store/StoreContext";
import { setBackground } from "../store/actions/appAction";

export default function DeclareForm(props) {
  const { event } = props;
  const { state, dispatch } = useContext(StoreContext);
  const { backgroundName } = state.app;

  useEffect(() => {
    dispatch(setBackground(event.backgroundImage));
  }, [backgroundName]);

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
                    <option value={item.value} key={item.id}>
                      {item.value}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="form-register-role">
                  <FontAwesomeIcon icon="user-tie" /> 身分
                </Form.Label>
                <Form.Control
                  as="select"
                  id="form-register-role"
                  defaultValue=""
                >
                  <option value="" disabled>
                    請選擇身分
                  </option>
                  {/* eslint-disable-next-line react/prop-types */}
                  {event.roles.map((item) => (
                    <option value={item.value} key={item.id}>
                      {item.value}
                    </option>
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
            <Col />
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
      {event.googleFormSrc && (
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
  event: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    googleFormSrc: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    orgs: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
    roles: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

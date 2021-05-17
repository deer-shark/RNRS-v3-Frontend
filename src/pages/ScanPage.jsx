import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as ZXing from "@zxing/library";
import Swal from "sweetalert2";

let codeReader;
let lastResult;

function scanStart(deviceId) {
  codeReader.decodeFromVideoDevice(deviceId, "scanner", (result, err) => {
    if (result) {
      if (result.text !== lastResult) {
        console.log(result);
        Swal.fire({
          text: result.text,
          showConfirmButton: false,
          icon: "success",
          timer: 1000,
        });
        // lastResult = result.text;
      }
    }
    if (err && !(err instanceof ZXing.NotFoundException)) {
      console.error(err);
    }
  });
}

function scanReset() {
  codeReader.reset();
  lastResult = undefined;
}

const useConstructor = (callBack = () => {}) => {
  const hasBeenCalled = useRef(false);
  if (hasBeenCalled.current) return;
  callBack();
  hasBeenCalled.current = true;
};

export default function ScanPage() {
  const [devices, setDevices] = useState([]);
  const [isMirror, setIsMirror] = useState(false);
  const [deviceIndex, setDeviceIndex] = useState(0);
  const [eventSelected, setEventSelected] = useState(false);
  const [gateSelected, setGateSelected] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  useConstructor(() => {
    codeReader = new ZXing.BrowserMultiFormatReader();
    codeReader
      .listVideoInputDevices()
      .then((videoInputDevices) => {
        const dd = [];
        videoInputDevices.forEach((item) => {
          dd.push({
            deviceId: item.deviceId,
            lable: item.label,
            mirror: false,
          });
          dd.push({
            deviceId: item.deviceId,
            lable: `(鏡像) ${item.label}`,
            mirror: true,
          });
        });
        setDevices(dd);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  useEffect(() => {
    return () => {
      codeReader.reset();
      lastResult = undefined;
    };
  }, []);
  return (
    <>
      <Container className="info-container">
        <h2>刷入 QR Code</h2>
        <Form.Row>
          <Col md>
            <Form.Group>
              <Form.Label htmlFor="form-scan-event">
                <FontAwesomeIcon icon="calendar-day" /> 活動
              </Form.Label>
              <Form.Control
                as="select"
                id="form-scan-event"
                defaultValue=""
                onChange={() => {
                  setEventSelected(true);
                }}
              >
                <option value="" disabled>
                  請選擇活動
                </option>
                <option value="e1">活動一</option>
                <option value="e2">活動二</option>
                <option value="e3">活動三</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group>
              <Form.Label htmlFor="form-scan-event">
                <FontAwesomeIcon icon="door-open" /> 入口
              </Form.Label>
              <Form.Control
                as="select"
                id="form-scan-event"
                defaultValue=""
                onChange={() => {
                  setGateSelected(true);
                }}
              >
                <option value="" disabled>
                  請選擇入口
                </option>
                <option value="g1">入口一</option>
                <option value="g2">入口二</option>
                <option value="g3">入口三</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group>
              <Form.Label htmlFor="form-scan-event">
                <FontAwesomeIcon icon="video" /> 鏡頭
              </Form.Label>
              <Form.Control
                as="select"
                id="form-scan-event"
                defaultValue="0"
                onChange={(event) => {
                  setDeviceIndex(event.target.value);
                }}
                disabled={isScanning}
              >
                <option value="" disabled>
                  請選擇鏡頭
                </option>
                {devices.map((item, index) => (
                  <option value={index} key={item.lable}>
                    {item.lable}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={2} lg={1}>
            <Form.Group>
              <Form.Label htmlFor="form-scan-event" />
              <Button
                block
                onClick={() => {
                  if (isScanning) {
                    scanReset();
                    setIsScanning(false);
                  } else {
                    setIsMirror(devices[deviceIndex].mirror);
                    scanStart(devices[deviceIndex].deviceId);
                    setIsScanning(true);
                  }
                }}
                disabled={!(eventSelected && gateSelected)}
              >
                {isScanning ? "重設" : "開始"}
              </Button>
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col md>
            <Card style={{ backgroundColor: "#E9ECEF" }}>
              <Card.Body>
                <Card.Title>
                  <FontAwesomeIcon icon="camera" /> Scanner
                </Card.Title>
                <video
                  id="scanner"
                  style={{
                    transform: isMirror ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                  width="100%"
                  muted
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card style={{ backgroundColor: "#E9ECEF" }}>
              <Card.Body>
                <Card.Title>
                  <FontAwesomeIcon icon="address-card" /> 來賓資訊
                </Card.Title>
                <Form.Row>
                  <Col md>
                    <Form.Group>
                      <Form.Label htmlFor="form-register-location">
                        <FontAwesomeIcon icon="school" /> 單位
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="form-register-location"
                        placeholder="系統自動填入"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col md>
                    <Form.Group>
                      <Form.Label htmlFor="form-register-location">
                        <FontAwesomeIcon icon="user" /> 姓名
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="form-register-location"
                        placeholder="系統自動填入"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col md>
                    <Form.Group>
                      <Form.Label htmlFor="form-register-location">
                        <FontAwesomeIcon icon="user-tie" /> 身分
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="form-register-location"
                        placeholder="系統自動填入"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col md>
                    <Form.Group>
                      <Form.Label htmlFor="form-register-location">
                        <FontAwesomeIcon icon="clock" /> 填報時間
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="form-register-location"
                        placeholder="系統自動填入"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Button block variant="danger">
                  駁回簽到
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Form.Row>
      </Container>
    </>
  );
}

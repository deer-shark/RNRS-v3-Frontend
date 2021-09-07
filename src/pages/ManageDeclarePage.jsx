import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import QRCode from "qrcode.react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import API from "../API";

const ReactSwal = withReactContent(Swal);
const { SearchBar } = Search;

function formatterHash(content) {
  return content.substr(0, 6);
}

function formatterCreatedAt(content) {
  return new Date(content).toLocaleString();
}

function onClickBtnQRCode(row) {
  const code = `RNRSv3-${row.EventId}-${row.hash}`;
  ReactSwal.fire({
    title: `${row.id} - ${row.name}`,
    html: (
      <>
        <QRCode value={code} size="255" level="H" renderAs="svg" />
        <p style={{ marginBottom: "0px" }}>
          <br />
          {code}
        </p>
      </>
    ),
  });
}

function formatterQRCode(content, row) {
  return <Button onClick={() => onClickBtnQRCode(row)}>Show</Button>;
}

// DID Name Org Role Email Phone Hash CreatedAt QRCode
const columns = [
  {
    dataField: "id",
    text: "ID",
  },
  {
    dataField: "name",
    text: "姓名",
  },
  {
    dataField: "EventOrg.value",
    text: "單位",
  },
  {
    dataField: "EventRole.value",
    text: "身分",
  },
  {
    dataField: "email",
    text: "E-mail",
  },
  {
    dataField: "phone",
    text: "電話",
  },
  {
    dataField: "hash",
    text: "隨機碼",
    formatter: formatterHash,
  },
  {
    dataField: "createdAt",
    text: "填報時間",
    formatter: formatterCreatedAt,
  },
  {
    dataField: "qrcode",
    text: "QR Code",
    formatter: formatterQRCode,
  },
];

const expandRow = {
  renderer: () => <></>,
  showExpandColumn: true,
  expandByColumnOnly: true,
  // eslint-disable-next-line react/prop-types
  expandHeaderColumnRenderer: ({ expanded }) => {
    if (expanded) {
      return <FontAwesomeIcon icon="minus" />;
    }
    return <FontAwesomeIcon icon="plus" />;
  },
  // eslint-disable-next-line react/prop-types
  expandColumnRenderer: ({ expanded }) => {
    if (expanded) {
      return <FontAwesomeIcon icon="minus" />;
    }
    return <FontAwesomeIcon icon="plus" />;
  },
};

export default function ManageDeclarePage() {
  const [data, setData] = useState([]);
  const [eventList, setEventList] = useState([{ id: 0, value: "Loading..." }]);

  useEffect(() => {
    API.get("/event/organize").then((res) => {
      if (res.status === 200) setEventList(res.data);
    });
  }, [true]);

  function getDeclares(value) {
    API.get(`/declare/${value}`).then((res) => {
      if (res.status === 200) setData(res.data.reverse());
    });
  }

  return (
    <Container className="info-container">
      <h2>填報管理</h2>
      <ToolkitProvider keyField="id" data={data} columns={columns} search>
        {(props) => (
          <>
            <Form.Row>
              <Col md={4}>
                <Form.Group>
                  <Form.Label htmlFor="form-scan-event">
                    <FontAwesomeIcon icon="calendar-day" /> 活動
                  </Form.Label>
                  <Form.Control
                    as="select"
                    id="form-scan-event"
                    defaultValue="0"
                    onChange={(e) => {
                      getDeclares(e.target.value);
                    }}
                  >
                    <option value="0" disabled>
                      請選擇活動
                    </option>
                    {eventList.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={{ span: 4, offset: 4 }}>
                <Form.Group>
                  <Form.Label htmlFor="form-register-name">
                    <FontAwesomeIcon icon="search" /> 搜尋
                  </Form.Label>
                  {/* eslint-disable-next-line react/prop-types,react/jsx-props-no-spreading */}
                  <SearchBar {...props.searchProps} />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                {/* eslint-disable react/prop-types, react/jsx-props-no-spreading */}
                <BootstrapTable
                  search
                  wrapperClasses="table-responsive"
                  rowClasses="text-nowrap"
                  bootstrap4
                  striped
                  hover
                  expandRow={expandRow}
                  {...props.baseProps}
                />
                {/* eslint-enable react/prop-types, react/jsx-props-no-spreading */}
              </Col>
            </Form.Row>
          </>
        )}
      </ToolkitProvider>
    </Container>
  );
}

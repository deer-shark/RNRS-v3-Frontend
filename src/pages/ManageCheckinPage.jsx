import React, { useEffect, useState } from "react";
import { Col, Container, Form } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../API";

const { SearchBar } = Search;

function formatterHash(content) {
  return content.substr(0, 6);
}

function formatterCreatedAt(content) {
  return new Date(content).toLocaleString();
}

// CID DID Name Org Role Hash Gate OperatorName CreatedAt
const columns = [
  {
    dataField: "id",
    text: "ID",
  },
  {
    dataField: "Declare.id",
    text: "填報 ID",
  },
  {
    dataField: "Declare.name",
    text: "姓名",
  },
  {
    dataField: "Declare.EventOrg.value",
    text: "單位",
  },
  {
    dataField: "Declare.EventRole.value",
    text: "身分",
  },
  {
    dataField: "Declare.hash",
    text: "隨機碼",
    formatter: formatterHash,
  },
  {
    dataField: "EventGate.value",
    text: "入口",
  },
  {
    dataField: "User.name",
    text: "人員",
  },
  {
    dataField: "createdAt",
    text: "刷入時間",
    formatter: formatterCreatedAt,
  },
];

export default function ManageCheckinPage() {
  const [data, setData] = useState([]);
  const [eventList, setEventList] = useState([{ id: 0, value: "Loading..." }]);

  useEffect(() => {
    API.get("/event/organize").then((res) => {
      if (res.status === 200) setEventList(res.data);
    });
  }, [true]);

  function getCheckin(value) {
    API.get(`/checkin/${value}`).then((res) => {
      if (res.status === 200) setData(res.data.reverse());
    });
  }

  return (
    <Container className="info-container">
      <h2>刷入管理</h2>
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
                      getCheckin(e.target.value);
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

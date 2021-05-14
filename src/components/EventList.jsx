import React from "react";
import { Container, ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/list-group.css";

export default function EventList() {
  return (
    <>
      <Container className="info-container">
        <h2>所有進行中活動</h2>
        <ListGroup className="toc-container" id="toc">
          <ListGroupItem action className="rnrs-list-item">
            <h5>Stray 迷途</h5>
            <Badge variant="warning">
              <FontAwesomeIcon icon={["far", "clock"]} /> 2021/05/07
            </Badge>{" "}
            <Badge variant="secondary">
              <FontAwesomeIcon icon={["far", "map"]} /> 高師大附中
            </Badge>
          </ListGroupItem>
        </ListGroup>
      </Container>
    </>
  );
}

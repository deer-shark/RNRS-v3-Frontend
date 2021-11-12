import React from "react";
import { Container, ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import "../css/list-group.css";
import PropTypes from "prop-types";

export default function EventList(props) {
  const history = useHistory();
  const { events } = props;

  return (
    <>
      <Container className="info-container">
        <h2>所有進行中活動</h2>
        <ListGroup className="toc-container" id="toc">
          {events
            .slice(0)
            .reverse()
            .map((item) => (
              <ListGroupItem
                action
                className="rnrs-list-item"
                onClick={() => {
                  history.push(`/declare/${item.code}`);
                }}
                key={item.id}
              >
                <h5>{item.name}</h5>
                <Badge variant="warning">
                  <FontAwesomeIcon icon={["far", "clock"]} /> {item.date}
                </Badge>{" "}
                <Badge variant="secondary">
                  <FontAwesomeIcon icon={["far", "map"]} /> {item.location}
                </Badge>
              </ListGroupItem>
            ))}
        </ListGroup>
      </Container>
    </>
  );
}

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

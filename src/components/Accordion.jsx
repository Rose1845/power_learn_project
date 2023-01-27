import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Row className="d-flex flex-col ">
      <Col className="d-flex " onClick={() => setIsActive(!isActive)}>
        <div className="text-center">{question}</div>
        <div>{isActive ? "-" : "+"}</div>
      </Col>
      <Row>{isActive && <div className="text-center">{answer}</div>}</Row>
    </Row>
  );
};

export default Accordion;

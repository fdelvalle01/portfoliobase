import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiEclipse, DiGithub, DiMsqlServer } from "react-icons/di";
import {
  SiVisualstudiocode
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiMsqlServer />
      </Col>  
    </Row>
  );
}

export default Toolstack;

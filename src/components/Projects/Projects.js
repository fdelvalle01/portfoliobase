import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sebraht from "../../Assets/Projects/sebraht.png";
import sebraht_siadus from "../../Assets/Projects/sebraht_siadus.png";

import ProjectModal from './ProjectModal';
import {useState} from "react";

function Projects() {

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log("open")
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("open")
    setModalOpen(false);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sebraht}
              isBlog={false}
              title="Stock Trading Platform: Integration for the Dominican Republic Market"
              description="I developed and participated in the integration of a cutting-edge stock trading platform for the Dominican Republic market. This platform, designed with high-tech components and a highly competitive approach to financial software development, has been a significant advancement in the modernization and efficiency of the Dominican stock market"
              ghLink="https://bvrd.com.do/bvrd-bsc/"
              demoLink=""
              openModal={handleOpenModal} 
            />
           <ProjectModal open={modalOpen} handleClose={handleCloseModal} />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sebraht_siadus}
              isBlog={false}
              title="User management system for the Sebra HT trading platform"
              description="In this project, I was the lead developer responsible for creating and implementing the user management system for the entire trading software. This system is the core component where all the trading entities are created and managed daily, ensuring comprehensive administration of these entities."
              ghLink=""
              demoLink=""
              openModal={handleOpenModal} 
            />
           <ProjectModal open={modalOpen} handleClose={handleCloseModal} />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

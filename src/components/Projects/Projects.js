import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
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
              imgPath={chatify}
              isBlog={false}
              title="Password Generator"
              description="Python based password generator Created with StackBlitz ⚡️"
              ghLink="https://github.com/sathvik-shettyy/password-generator"
              demoLink="https://github.com/sathvik-shettyy/password-generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="C-Based-Keylogger"
              description="Keylogger Detector is a simple C++ program designed to detect potential keylogger activity on a Windows system"
              ghLink="https://github.com/sathvik-shettyy/C-based-keylogger"
              demoLink="https://github.com/sathvik-shettyy/C-based-keylogger"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Github stats analyzer"
              description="GitHub Stats Analyzer is a Python script leveraging the GitHub API to fetch and present key statistics for a repository. Easily retrieve information on watchers, forks, contributors, open issues, and pull requests, empowering users to analyze GitHub repositories effortlessly."
              ghLink="https://github.com/sathvik-shettyy/GitHub-Stats-Analyzer"
              demoLink="https://github.com/sathvik-shettyy/GitHub-Stats-Analyzer              
            />
          </Col>
                
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

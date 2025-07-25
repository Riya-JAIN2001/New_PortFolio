import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiGit

} from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiMysql } from "react-icons/si";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <span style={{ fontSize: "12px", color: "white" }}>Python</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <span style={{ fontSize: "12px", color: "white" }}>TypeScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span style={{ fontSize: "12px", color: "white" }}>JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <span style={{ fontSize: "12px", color: "white" }}>Nodejs</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span style={{ fontSize: "12px", color: "white" }}>ReactJS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <span style={{ fontSize: "12px", color: "white" }}>MongoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <span style={{ fontSize: "12px", color: "white" }}>MySQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <span style={{ fontSize: "12px", color: "white" }}>Nextjs</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <span style={{ fontSize: "12px", color: "white" }}>ExpressJS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <span style={{ fontSize: "12px", color: "white" }}>TailwindCSS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <span style={{ fontSize: "12px", color: "white" }}>Postgresql</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <span style={{ fontSize: "12px", color: "white" }}>Git</span>
      </Col>
    </Row>
  );
}

export default Techstack;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Riya Jain</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} RJ</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Riya-JAIN2001"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.geeksforgeeks.org/user/riyajain115/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGeeksforgeeks />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/riya-jain20010509/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.hackerrank.com/profile/niajp2950"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiHackerrank />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

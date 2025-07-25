import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Riya Jain </span>
            from <span className="purple"> Madhya Pradesh, India.</span>
            <br />
            I have completed  Master of Computer Application from
            Teerthanker Mahaveer University.
            <br />
            I have completed Post Graduation Diploma in Computer Application at
            Makhanial Chaturvedi University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Riya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

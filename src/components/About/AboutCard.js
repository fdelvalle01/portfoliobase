import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Francisco Del Valle </span>
            from <span className="purple"> Santiago, Chile.</span>
            <br />
            I am currently employed as a software developer at Nuam Exchange x Bolsa De Santiago.
            <br />
            I completed my university education at INACAP, majoring in Computer Engineering. Additionally, I obtained a diploma in Mobile Application Development from the Pontifical Catholic University of Chile.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The people who are crazy enough to think they can change the world are the people who succeed.!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Francisco Del Valle</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

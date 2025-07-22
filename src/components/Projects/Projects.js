import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import tour from "../../Assets/Projects/tour.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Bloggy from "../../Assets/Projects/Bloggy.png";

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
              imgPath={tour}
              isBlog={false}
              title="Tour Management Application"
              description="TravelWorld is a JavaScript-based booking platform offering seamless tour booking experiences on desktop and mobile.
              Utilizing React.js, Node.js, MongoDB, and more, it features
              user login, tour listings with images and descriptions, a search
              bar, responsive design, and profile updates, ensuring easy and
              secure tour bookings from anywhere.
              Technologies: Reactjs, Nodejs, MongoDB, Mongoose,
              JWT, Cookies, Context API, ReactStrap, React-Hooks, React router v6"
              ghLink="https://github.com/Riya-JAIN2001/Tour-Management-App"
              demoLink="https://tour-management-app-full-stack.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bloggy}
              isBlog={false}
              title="BloggyBlogs"
              description="Bloggy Blogs is a full-stack blogging app built with the PERN stack (PostgreSQL, Express.js, React, Node.js). It allows users to create, edit, delete, and view blog posts through a clean, responsive interface. The app features a RESTful API, dynamic frontend, and reliable data handling, making it ideal for personal blogging or sharing content online."
              ghLink="https://github.com/Riya-JAIN2001/Blogging-Website"
              demoLink="https://riya-j-blogging-website-git-main-riya-s-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SubTitle finder Application"
              description="SubTitle finder Application leveraging API integration to
              fetch subtitles from various media genres such as movies,
              dramas, web series, TV series, and K-dramas. This project
              demonstrates my skills in API usage, data retrieval, and
              parsing for dynamic content extraction, showcasing my proficiency in frontend development.
              Technologies: HTML, CSS, JavaScript, Online API, Rapid
              API"
              ghLink="https://github.com/Riya-JAIN2001/Subtitle_Finder_App"
              demoLink="https://riya-jain2001.github.io/Subtitle_Finder_App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Food Delivery App"
              description="Best Eats is a modern and responsive React application designed to showcase and filter food items from various categories. The application features a dynamic menu, filtering options, and a visually appealing interface."
              ghLink="https://github.com/rishabhjain208/Landing-Page"
              demoLink="https://food-website-nine-xi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Landing Page"
              description="This repository contains the code for a responsive landing page built with React and Tailwind CSS. The project demonstrates the use of various components to create a visually appealing and functional landing page that adapts well to different screen sizes."
              ghLink="https://github.com/Riya-JAIN2001/LandingPage_Assignment"
              demoLink="https://landing-page-assignment-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Weather App"
              description="The Weather App fetches weather data from the Open Weather Map API based on the user's input of a city name. It displays the current temperature, humidity, and wind speed, along with an icon representing the weather condition. Users can enter a city name and press enter or click the search button to get the weather information.
              "
              ghLink="https://github.com/Riya-JAIN2001/Weather-App"
              demoLink="https://riya-jain2001.github.io/Weather-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Dice Game"
              description="This is a simple dice game project where users can roll a dice, select a number, and earn points based on their guess."
              ghLink="https://github.com/Riya-JAIN2001/Dice-Game"
              demoLink="https://dice-game-alpha-ruddy.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

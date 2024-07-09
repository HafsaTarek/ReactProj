import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./projectCard"; 
import "./Navbar.css";
import img1 from "../images/Screenshot (39).png";
import img2 from "../images/Screenshot (40).png";
import img3 from "../images/Screenshot (41).png";
import img4 from "../images/Screenshot (42).png";
import img5 from "../images/Screenshot (43).png";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:img1, 
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:img2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:img3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:img4, 
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:img5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:img1, 
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>My Projects:</h2>
            <p>
              Hello, I'm Hafsa Tarek and this is my fifth project in FrontEnd.
            </p>
            <Tab.Container defaultActiveKey="first">
              <Nav
                variant="pills"
                className="flex-row projSections justify-content-between"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">1st Section</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">2nd Section</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">3rd Section</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        {...project}
                      />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    My name is Hafsa, I live in Giza, and this is my fifth
                    project in Web Development.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

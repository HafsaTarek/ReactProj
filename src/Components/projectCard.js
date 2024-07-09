import React from "react";
import { Col } from "react-bootstrap";
import "./Navbar.css";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="imgBox">
        <img src={imgUrl} alt={title} />
        <div className="projectInfo">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard; 

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Navbar.css'; 

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavLinkClick = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <Navbar expand="lg" className="navbar bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="nav-link-custom Logo">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link-custom" end onClick={() => handleNavLinkClick('/', 'welcome')}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/skills" className="nav-link-custom" onClick={() => handleNavLinkClick('/skills', 'skills')}>
              Skills
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className="nav-link-custom" onClick={() => handleNavLinkClick('/projects', 'projects')}>
              Projects
            </Nav.Link>

            <div className="d-sm-flex">
              
            <div className="iconDiv">
            <Nav.Link href="https://www.linkedin.com" target="_blank" className="icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link>
            </div>

            <div className="iconDiv">
            <Nav.Link href="#" target="_blank" className="icon">
              <FontAwesomeIcon icon={faFacebook} />
            </Nav.Link>
            </div>

             <div className="iconDiv">
            <Nav.Link href="#" target="_blank" className="icon">
              <FontAwesomeIcon icon={faInstagram} />
            </Nav.Link>
            </div>

            <button className="navBtn">Let's Connect</button>
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

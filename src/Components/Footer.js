import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer=()=>{
    return(
<footer className="footer">
<Container>
  <Row className="align-items-center">
    <Col size={12} sm={6}>
    <h2 className="logo">Portofolio</h2>
    </Col>
    <Col size={12} sm={6} className="text-center text-sm-end">
      <div className="social-icon">
      <FontAwesomeIcon  icon={faLinkedin} className="i" />
      <FontAwesomeIcon icon={faFacebook}  className="i"/>
      <FontAwesomeIcon icon={faInstagram}  className="i"/>
      </div>
    <p>--Copyrights 2024-- All Rights here by Hafsa Tarek Hikal</p>
    </Col>
  </Row>
</Container>
</footer>
    )
}

export default Footer;
import React from "react";
import useState from "react"
import contactUs from '../images/contactUs.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import './Navbar.css'; 

const Contact=()=>{

    return(
        <section className="contactForm">
            <Container>
            <Row className="align-items-center">
                <Col size={12} md={6}>
                 <img src ={contactUs}  alt="Contact Image" className="contactImg"/>
                </Col>

                 <Col size={12} md={6} >
                 <h2>Get In Touch</h2>
                 <form>
                    <Row>
                        <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="First Name"></input>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="Last Name"></input>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="First Name"></input>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                        <input type="tel" placeholder="Phone No."></input>
                        </Col>
                        <Col>
                        <textarea row="6" placeholder="Message"></textarea>
                        <button>Send</button>
                        </Col>
                    </Row>
                 </form>
                 </Col>
             </Row>
            </Container>
        </section>
    )

}

export default Contact;
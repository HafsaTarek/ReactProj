import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Navbar.css'; 

const PreFooter = () => {
  return (
      //  <Col lg={4}>
        <div className="preFooterContainer">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>See My Projects At Once<br></br> & Never miss latest updates, so leave you email here</h3>
            </Col>
            <Col md={6} xl={7}>
              <form>
                <div className="emailBx">
                  <input type="email"  placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
  );
};

export default PreFooter;

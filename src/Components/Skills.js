import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import meter1 from '../images/meter1.svg'; 
import meter2 from '../images/meter2.svg'; 
import meter3 from '../images/meter3.svg'; 
import './Navbar.css'; 

const Skills = () =>{
        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          }

          return(
            <div className="multiCarousels" id="skills">
                <Container>
                    <Row>
                        <Col>
                        <div className="skillBox">
                            <h2 className="skill">Skills</h2>
                            <p>You can see my skills here:</p>
                            <Carousel responsive={responsive} infinite={true} className="SkillSlider">
                            <div className="item">
                                <img src={meter1} alt="Image"/>
                                <h2>BackEnd Development</h2>
                             </div>
                             <div className="item">
                                <img src={meter2} alt="Image"/>
                                <h2>Data Science</h2>
                             </div>
                             <div className="item">
                                <img src={meter2} alt="Image"/>
                                <h2>FrontEnd Development</h2>
                             </div>
                             <div className="item">
                                <img src={meter3} alt="Image"/>
                                <h2>Cyber Security</h2>
                             </div>
                            </Carousel>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
          )
    
}

export default Skills;
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../images/headerImg.webp'; 
import './Navbar.css'; 

 const Welcome = () => {
    const [loopNum, setLoopNum] = useState(0); //an index indicates which word is currently displayed on the screen 0 is the first word
    const [isDeleted, setIsDeleted] = useState(false); //indicates whether the word is deleted or typed out and false means it's typed out
    const [text, setText] = useState(''); //indicates which part(substring) of the word being displayed w then we and so on
    const period = 2000; //defines the pause duration between displaying each word
    const roles = ["Front-end Developer", "Back-end Developer", "FullStack Web Developer"];
    const [delta, setDelta] = useState(300 - Math.random() * 100); //This state variable determines the speed at which each letter appears or disappears. It starts with a random value between 200 and 300 milliseconds.

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta); //The tick function is working each delta time

        return () => { clearInterval(ticker) };
    }, [text, delta]); //The interval is cleared when text,delta changes

    const tick = () => {
        let i = loopNum % roles.length; //i is the index of each word typed out to loop over the roles array
        let fullText = roles[i];
        let updatedText = isDeleted ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); 
        //when isDleted is true the word is deleted letter by letter else, the word is typed letter by letter
        setText(updatedText);

        if (isDeleted) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleted && updatedText === fullText) {
            setIsDeleted(true); //when the word is typed set isDeleted by true to be delted
            setDelta(period);
        } else if (isDeleted && updatedText === '') {
            setIsDeleted(false);
            setLoopNum(loopNum + 1); //go to the secon word element in the array
            setDelta(500); //500ms
        }
    };

    return (
        <section className="welcome" id="welcome">
            <Container >
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="welcomeMsg"> Welcome to my Portfolio</span>
                        <h1 className="HiMsg">{"Hi! I'm Hafsa Tarerk Hikal,"}<span className="change">{text}</span></h1>
                        <p className="helloMsg">Hello, I have 5 months of experience in Web Development</p>
                        <p className="connMsg">Let's Connect <FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header" className ="headerImg" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Welcome;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import PreFooter from "./Components/preFooter"; 
import Footer from "./Components/Footer"; 

const App = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Welcome />
        </div>

        <div>
         <Skills /> 
         </div>

         <div>
          <Projects />
          </div>

          <div>
          <Contact />
          </div>

          <div>
          <PreFooter />
          </div>

          <div>
           <Footer />
          </div>
      
      <Routes>
        <Route path="/skills"/>
        <Route path="/projects"/>
      </Routes>
      
    </Router>
  );

};


export default App;

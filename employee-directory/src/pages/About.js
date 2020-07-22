import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Background from '../components/img/office.jpg';

var sectionStyle = {
    
    height: "787px",
    backgroundImage: `url(${Background})`
}
var welcomeSection = {
    justifyContent: "center",
    marginTop: "55px",
    color: "#800000"
}

function About() {
  return (
      
    <div style={ sectionStyle }>
      
      <Container>
        <Row>
           <h1 style={ welcomeSection }>Welcome To SraightLineUp Directory </h1>
        </Row>

        
      </Container>
    </div>
   
  );
}

export default About;
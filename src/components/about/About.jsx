import React, { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
   {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            Hi! My name is <b>Chandra Shekhar Reddy Challa</b>.I am a passionate developer with experience in security, committed to building secure, robust applications. My expertise spans threat modeling, vulnerability assessment, and implementing security best practices throughout the development lifecycle. I enjoy staying up-to-date with the latest security trends, continuously honing my skills in areas like encryption, authentication, and penetration testing. As a security engineer, I focus on ensuring that both the code and the infrastructure are resilient against evolving cyber threats while delivering high-quality software solutions.
          </p>
          <p className={classes.br}>
            I love exploring new technologies and being a practitioner, I like to stay on top of
            latest trends. I try to leave every line of code I write more readable, accessible, and
            modular.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default About;

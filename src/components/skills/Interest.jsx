import React, { Component } from 'react';
import classes from './Interest.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>WHAT I DO?</span>
      <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
      <div className={classes.Interest}>
        {/* <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.web}>
          <h3>Principal Security Engineer</h3>
          <p>
          Experienced and results-driven Principal Security Engineer with over 8+ years of expertise in designing, implementing, and managing robust security infrastructures. Proficient in leading cross-functional teams to develop and execute enterprise-level security strategies, risk assessments, and threat mitigation plans. Adept at managing complex security projects, ensuring compliance with industry standards, and responding to security incidents. Strong background in cloud security, network security, penetration testing, vulnerability management, and incident response. Demonstrates leadership in fostering security best practices while continuously enhancing security posture across diverse environments.
          </p>
        </div>
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.app}>
          <h3>Web Development</h3>
          <p>
            Javascript/ Typescript, HTML/ CSS, ReactJs,Next.js,Redux,Python,
            CSS, Redux Toolkit,JEST, Unit Testing.
          </p>
        </div>
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.other}>
          <h3>Expertise</h3>
          <p>
            AWS, Docker, GitHub, Linux, Terraform, Dockers, Vault GIT, Jenkins, Argo CD,Frontend System Design, Express.js, Node.js, MongoDB,
            SQL, NOSQL, Socket.io, jQuery,SQL SERVER, MY SQL, PostgreSQL
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
      {/* </ScrollAnimation> */}
    </div>
  );
}

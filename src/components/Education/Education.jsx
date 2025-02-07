import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import { FaArrowRightFromBracket} from 'react-icons/fa6';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='experience'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}

                <article>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Certifications</h2>
                      <div className={classes.description}>AWS Certified Security – Specialty (Jan 2025 -Jan 2028) 
                      <div className={classes.points}>
                          <a
                                        href='https://www.credly.com/badges/9a749654-6c29-41e0-a1fb-dbc60719ce61/linked_in_profile'
                                        rel='opener noreferrer'
                                        target='_blank'
                                      >
                                        Show Credential AWS <FaArrowRightFromBracket/>
                                      </a> 
                         
                     </div>
                      </div>
                      <div className={classes.description}>Verified International Academic Qualifications
                      <div className={classes.points}>
                          <a
                                        href='https://www.credly.com/badges/603930a8-a5ae-4906-8520-81c89c3b90c9/linked_in_profile'
                                        rel='opener noreferrer'
                                        target='_blank'
                                      >
                                        Show Credential WES <FaArrowRightFromBracket/>
                                      </a> 
                         
                     </div>
                      </div>
                    </div>
                  </article>
                   {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Experience</h2>
                      <div className={classes.paraWithSubheading}>
                        <div className={classes.subHeading}>Principal Security Engineer- 7-Eleven (Sep 2019 - Present)</div>
                        <div className={classes.points}>
                          <div className={classes.description}>
                          Implementing WAF (Web Application Firewall) for 7-11 websites and API's.Implementing APIGEE and API Gateway security policies and firewalls.
                          </div>
                          <div className={classes.description}>
                          Working with GKE (Google Kubernetes Engine) for migrating Data centre
                          applications to managed Kubernetes Cluster.Managing APIGEE Edge Security platform, AQUA Container scanning and Cloud
                          security management using HSM, Thousand eyes.
                          </div>
                        </div>
                      </div>
                      <div className={classes.paraWithSubheading}>
                      <div className={classes.subHeading}>Security Engineer- Public Consulting Group (March 2017 - August 2019) </div>
                        <div className={classes.points}>
                          <div className={classes.description}>
                          Implementing OS Security and Security Standards for Windows and Linux Servers.Implementing OS Security and Security Standards for Windows and Linux Servers.
                          </div>
                          <div className={classes.description}>
                          Implementing Cyber security for application by disabling cipher suites, installing
                          security certificates, implementing server hardening and installing firewalls.
                          Creating the configuration for establishing a VPN tunnel, Direct Connect between on premise network and AWS VPC.
                          Implementing security systems, including firewalls, intrusion detection systems,anti-virus software, authentication systems, log management, content filtering.
                          </div>
                        </div>
                      </div>
                      <div className={classes.paraWithSubheading}>
                      <div className={classes.subHeading}>Systems Engineer- Mass Mutual Financial Group (October 2016 - October 2017) </div>
                        <div className={classes.points}>
                          <div className={classes.description}>
                          Developing use cases for different scenarios when working with Hybrid cloud platform wit AWS and Private Cloud Platform.
                          </div>
                          <div className={classes.description}>
                          Designing Different aspects of AWS Infrastructure such as Boot strap pattern for AWS servers, Compliance management and secure authentication of Aws
                          credentials for users with Okta and Active Directory Authentication.
                          Writing AWS Lambda Functions using python for event managements such as Daily backups of EC2 and enforcing security group tightening using lambda functions in AWS environments.
                          </div>
                        </div>
                      </div>
                      <div className={classes.paraWithSubheading}>
                      <div className={classes.subHeading}>Systems Engineer- SAE International(December 2015 - October 2016) </div>
                        <div className={classes.points}>
                          <div className={classes.description}>
                          CPerforming the hardening of AWS root accounts after requisition.Create IAM accounts for different users including developers, system admins and network admins.
                          </div>
                          <div className={classes.description}>
                          Analyse the existing on-premises architecture and come up with cloud architecture for the existing environment, and list all the services needed to migrate the current
                          architecture including the price estimation of resources on AWS.Creating migration documentation for the on-premises environment to be
                          migrated to the cloud environment.
                          </div>
                        </div>
                      </div>
                    </div>                 
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}

                   {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Bachelor's from JNTUH <span>2010-2014</span>
                      </h2>
                      <div className={classes.description}>
                        I completed my Bachelors in CSE (Computer Science and Engineering)
                        from JNTUH,India
                      </div >
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Master's from UCM<span>2014-2015</span>
                      </h2>
                      <div className={classes.description}>
                        I have completed my masters from University of Central Missouri in Computer Science ,USA
                      </div>
                    </div>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                      </div>
                  </article>
                  {/* </ScrollAnimation> */}

                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                
                  {/* </ScrollAnimation> */}
                </div>
              </div>
            </div>
          </div>
    
        </section>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Education;

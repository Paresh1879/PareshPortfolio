import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="paresh_pic"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! I'm Paresh Natarajan, currently pursuing my Master's in Information Systems at the University of Cincinnati. Originally from India, I come with valuable experience as a Software Engineer at Cognizant, specializing in Cloud Services for an energy and utilities company.            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            During my time at Cognizant, I focused on efficiently managing cloud services on both AWS and Azure platforms. I have a strong track record of delivering scalable and reliable solutions. Specifically, I've worked with AWS services such as Lambda and EC2, harnessing their power to ensure seamless performance and high availability.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            My expertise extends to containerization technologies like Docker and Kubernetes, enabling the successful deployment of microservices. This has led to substantial upgrades and improvements in application performance. In addition to container orchestration, I am proficient in utilizing Azure DevOps to streamline the software development lifecycle. This includes efficient collaboration, continuous integration, and continuous delivery, ensuring a smooth and automated release process. When it comes to data management, I am skilled in using SQL databases, ensuring effective organization and utilization of critical information.   <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;

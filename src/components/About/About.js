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
            Hello! I'm Paresh Natarajan, a seasoned Software Engineer with over 2 years of experience specializing in automating CI/CD pipelines in Azure and maintaining cloud infrastructure by deploying and scaling applications. I hold a bachelor's degree in Electronics and Communication Engineering and am currently pursuing a Master of Science in Information Systems from the University of Cincinnati, with a graduate certificate in data analytics</ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            During my time as a Software Engineer, I focused on leveraging AWS and Azure services to streamline development processes and ensure seamless application performance. I have a strong track record of optimizing cloud infrastructure and delivering scalable solutions. My expertise extends to containerization technologies like Docker and Kubernetes for orchestration, enabling successful deployment of microservices and significant improvements in application performance.            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            In addition to my technical skills, my coursework in data analytics has equipped me with the knowledge and tools to analyze data, apply algorithms, and utilize machine learning techniques to extract meaningful insights for informed decision-making. With my background in application development, DevOps engineering, and data analytics, I am eager to advance in ML/AI and contribute to innovative projects that drive business growth and success. <div className="tagline2">
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

import React from 'react';
import styled, { keyframes } from 'styled-components';
import Profile from './Profile.jpg';
import Images from './Images.jpg';
import { BsArrowUpRight } from 'react-icons/bs';
import { TfiDownload } from 'react-icons/tfi';
import { FaSquareXTwitter, FaLinkedin, FaSquareGithub } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.bg};
`;

const MainAbout2 = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;
  h2{
    color: ${(props) => props.theme.remainingTextColor};
  }
`;

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
   100% {
    transform: translateY(-10px);
  }
`;

const ProfileImage = styled.img`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  margin-top: 50px;
  animation: ${bounceAnimation} 1s infinite alternate;
  @media (max-width: 600px) {
    height: 160px;
  width: 160px;
  }
`;

const Description = styled.i`
  font-weight: 100;
  text-align: center; 
  color: ${(props) => props.theme.remainingTextColor};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.buttonBgColor};
  border: none;
  color: ${(props) => props.theme.textcolor};
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 30px;
  margin: 10px;
  display: flex;
  align-items: center;
  transition: transform 0.2s; 

  &:hover {
    transform: scale(1.1); 
  }
`;
const IconWrapper = styled.span`
  margin-left: 8px; 
`;

const CombinedTitle = styled.h1`
  font-size: 48px;
  text-align: center;
  color: ${(props) => props.theme.remainingTextColor};
  

`;

const ScoialIcon = styled.div`
  display :flex;
  font-size: 32px;
  gap:20px;
  a{
    color: ${(props) => props.theme.remainingTextColor};
  }
  
`
const HorizontalLine = styled.hr`
  width: 100%;
  border: 0; 
  height: 1px; 
  background-image: ${(props) => props.theme.gradient};

  margin-top: auto;
  margin-bottom: 30px; 
  
`;
const About = () => {
  const handleDownloadCV = () => {
    const driveLink = "https://drive.google.com/file/d/1SAbFU_pw3fK4rrqrnTeBSCg7FDGZJe0E/view?usp=sharing";
    window.open(driveLink, "_blank");
  };
  return (

    <AboutContainer id="about">
      <MainAbout2>
        <AboutContent>
          <ProfileImage src="https://avatars.githubusercontent.com/u/89182735?s=400&u=32835c1b590f98488d0c5f699160614857bf8b2f&v=4" alt="Avatar" />
          <h2>Hi I'm Nilesh</h2>
          <CombinedTitle>
            Creating digital <br />
            innovations, Web 3-driven journeys.
          </CombinedTitle>
          <Description>
            <p><i>I am a full stack software engineer with a strong focus on front-end and backend.</i></p>
          </Description>
          <ScoialIcon>
            <a href="https://github.com/nilesh-fatfatwale" target="_blank" rel="noopener noreferrer">
              <FaSquareGithub />
            </a>
            <a href="https://www.linkedin.com/in/nileshfatfatwale/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/0xnileshf" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter />
            </a>
          </ScoialIcon>
          <ButtonContainer>
            <Link to="contact" spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              delay={200}>
              <Button>Contact Me <IconWrapper><BsArrowUpRight /></IconWrapper></Button>
            </Link>
            <Button onClick={handleDownloadCV}>Download CV <IconWrapper><TfiDownload /></IconWrapper></Button>
          </ButtonContainer>
          <HorizontalLine />
        </AboutContent>
      </MainAbout2>
    </AboutContainer>
  );
};

export default About;

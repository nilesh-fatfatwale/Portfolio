import React from 'react';
import styled from 'styled-components';
import { BiLinkExternal } from 'react-icons/bi';
import { SiGithub } from 'react-icons/si';
import { projectData } from '../../data/content';
import { useState } from 'react'
const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.bg};
`;

const ProjectsContent = styled.div`
  max-width: 1200px;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.remainingTextColor};
`;

const ProjectList = styled.div`
  display: grid;
  gap: 40px;
  padding: 20px;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectItem = styled.div`
  height: 300px;
  width: 270px;
  border: 2px solid ${(props) => props.theme.buttonBgColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageSection = styled.div`
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
`;

const InnerImageSection = styled.img`
  height: 90%;
  width: 90%;
  border-radius: 10px;
  object-fit: cover;
  cursor: pointer;
  background-position: center;
  &:hover {
    transform: scale(1.1);
  }
`;

const TitleProject = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  color: ${(props) => props.theme.remainingTextColor};
`;

const IconSection = styled.div`
  height: 20%;
  display: flex;
  font-size: 24px;
  border-top: 2px solid ${(props) => props.theme.buttonBgColor};
  justify-content: space-evenly;
  align-items: center;
  a {
    color: ${(props) => props.theme.remainingTextColor};
  }
`;





const ProjectCard = ({ project }) => {
  
  return (
    <ProjectItem>
      <ImageSection>
        <InnerImageSection src={project.imageUrl} alt="icon" />
      </ImageSection>
      <TitleProject>{project.title}</TitleProject>
      <IconSection>
        <a href={project.githubCode} target="_blank" rel="noopener noreferrer">
          <SiGithub />
        </a>
        <a href={project.webLive} target="_blank" rel="noopener noreferrer">
          <BiLinkExternal />
        </a>
      </IconSection>
    </ProjectItem>
  );
};

const Projects = () => {
  const [toggle, setToggle] = useState('all');
  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        <Title>Projects</Title>
        <ProjectList>
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectList>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;

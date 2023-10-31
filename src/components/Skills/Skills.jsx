import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/content';

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.bg};
`;

const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
`;

const Title = styled.h2`
  margin-top: 20px;
  text-align: center;
  color: ${(props) => props.theme.remainingTextColor};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  padding: 20px 100px;
`;

const SkillItem = styled.div`
  font-size: 20px;
  font-weight: 400;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  border-style: dashed;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 10px;
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const ResponsiveSkillList = styled(SkillList)`
  @media (max-width: 768px) {
    gap: 8px;
    padding: 0px 10px;
  }
`;

const ResponsiveSkillItem = styled(SkillItem)`
  font-size: 16px;
  padding: 8px 12px;
  color: ${(props) => props.theme.remainingTextColor};
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsContent>
        <Title>Skills</Title>
        <ResponsiveSkillList>
          {skills.map((item) => (
            <ResponsiveSkillItem key={item.name}>
              <SkillImage src={item.image} alt={item.name} />
              {item.name}
            </ResponsiveSkillItem>
          ))}
        </ResponsiveSkillList>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;

import React from 'react';
import styled from 'styled-components';
import { education } from '../../data/content';
import MuiTimelineItem from '@mui/lab/TimelineItem';
import MuiTimelineSeparator from '@mui/lab/TimelineSeparator';
import MuiTimelineConnector from '@mui/lab/TimelineConnector';
import MuiTimelineContent from '@mui/lab/TimelineContent';
import MuiTimelineDot from '@mui/lab/TimelineDot';
import { useTheme } from '@mui/material/styles';

const EducationContainer = styled.div`
background-color: ${(props) => props.theme.bg};
  display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const CustomTimelineConnector = styled(MuiTimelineConnector)`
  color: ${(props) => props.theme.buttonBgColor};
`;


const EducationContent = styled.div`
   position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding-top: 20px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.remainingTextColor};
`;

const EducationList = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: center;
    }
`;
const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    border: 2px dashed ${(props) => props.theme.borderColor};
    
`;


const EducationCard = styled.div`
  .top {
    width: 100%;
    display: flex;
    gap: 12px
  }

  .imager {
    height: 55px;
    width:55px;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
  }

  .body-edu {
    width: 100%;
    display: flex;
    flex-direction: column; 
  }

  .name {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.remainingTextColor};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
  }

  .degree {
    font-size: 14px;
    font-weight: 500;
    font-style:italic;
    color: ${(props) => props.theme.remainingTextColor};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
  }

  .grade {
    margin-top:10px;
    display: flex;
    justify-content:space-between;
    color: ${(props) => props.theme.remainingTextColor};
    i{
      font-size: 14px;
    font-weight: 500;
    
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
  }
  }
`;

const EducationCardComponent = ({ educationData }) => {
  return (
    <Card>
      <EducationCard>
        <div className="top">
          <img className="imager" src={educationData.img} alt="Education Logo" />
          <div className="body-edu">
            <div className="name">{educationData.school}</div>
            <div className="degree">
              <i>{educationData.degree}</i>
            </div>
          </div>
        </div>
        <div className="grade">
          <i>{educationData.date}</i>
          <i>Percentage – {educationData.grade}</i>
        </div>
      </EducationCard>
    </Card>
  );
};

const Education = () => {
  const theme = useTheme();
  return (
    <EducationContainer id="education">
      <EducationContent>
        <Title>Education</Title>
        <EducationList>
          {education.map((educationData, index) => (
            <MuiTimelineItem key={index}>
              <MuiTimelineSeparator>
                <MuiTimelineDot variant="outlined" color="secondary" />
                {index !== education.length && (
                  <CustomTimelineConnector theme={theme} />
                )}
              </MuiTimelineSeparator>
              <MuiTimelineContent>
                <EducationCardComponent educationData={educationData} />
              </MuiTimelineContent>
            </MuiTimelineItem>
          ))}
        </EducationList>
      </EducationContent>
    </EducationContainer>
  );
};

export default Education;

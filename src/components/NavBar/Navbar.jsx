import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaMoon, FaSun } from 'react-icons/fa';
import { lightTheme, darkTheme } from '../../utils/Themes';
import { ThemeProvider } from "styled-components";



const NavContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  position: sticky;
  height: 80px;
  top: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.bg};
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
  font-size: 22px;
  border-radius: 30px;
  padding: 10px;
  background-color: ${(props) => props.theme.backgroundColor};
  @media screen and (max-width: 600px) {
      display: none;
    }
`;


const NavItem = styled.li`
  a {
    display: flex;
    align-items: center;
    font-size: 15px;
    cursor:pointer;
  }

  .nav-item {
    display: inline-block;
    padding: 8px 10px;
    color: ${(props) => props.theme.remainingTextColor};
    
    text-decoration: none;
    border-radius: 20px;
    transition: background-color 0.1s ease;

    &.active {
      background-color: ${(props) => props.theme.activeRoundedColor};
      color: ${(props) => props.theme.activeTextColor};
      
    }
  }
`;



const MobileNavButton = styled.button`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.remainingTextColor};
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 30px;
  margin: 10px;
  display: flex;
  align-items: center;
  transition: transform 0.2s; 
  box-shadow: ${(props) => props.theme.boxShadow};
  &:hover {
    transform: scale(1.1); 
  }
  @media (min-width: 600px) {
    display: none;
  }
    
`;

const MobileNavMenu = styled.div`
   display: none;
  position: absolute;
  top: 80px; 
  right: 0;
  width: calc(100% - 40px); 
  left: 20px;
  border: 1px solid ${(props) => props.theme.remainingTextColor};
  z-index: 100;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  overflow-y: auto;
  background-color: ${(props) => props.theme.bg};
  border-radius: 30px;
  text-align: center;
  @media (max-width: 600px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
     list-style-type: none;
  
  }
`;


const IconWrapper = styled.span`
  margin-left: 8px; 
`;

const ModeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
  cursor: pointer;
  color: ${(props) => props.theme.remainingTextColor};
  font-size: 20px;
  margin-left: 10px;
`;

const NavHeaderContainer = styled.div`
   display: flex;
  gap:80px;
  padding:  10px 0 20px 0; 
  
`;

const HorizontalLine = styled.hr`
  margin: 1rem 0;
  height: 1px;
  background-color:${(props) => props.theme.remainingTextColor};
  border: 0;
`;



const CloseButton = styled.span`
  font-size: 24px;
  cursor: pointer;
  color:${(props) => props.theme.remainingTextColor};
  margin-left: auto;
`;


const Navbar = ({ toggleDarkMode }) => {

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = () => {
    setActiveItem(setActiveItem);
    setMobileNavOpen(false);
  };




  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };



  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    toggleDarkMode();
  };


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <NavContainer>
        <NavList>
          <NavItem>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              delay={200}
              className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}
              onClick={() => handleItemClick('about')}
            >
              ABOUT
            </ScrollLink>
          </NavItem>
          <NavItem>
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              delay={200}
              className={`nav-item ${activeItem === 'Skills' ? 'active' : ''}`}
              onClick={() => handleItemClick('Skills')}
            >
              SKILLS
            </ScrollLink>
          </NavItem>
          <NavItem>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              delay={200}
              className={`nav-item ${activeItem === 'Projects' ? 'active' : ''}`}
              onClick={() => handleItemClick('Projects')}
            >
              PROJECTS
            </ScrollLink>
          </NavItem>
          <NavItem>
            <ScrollLink
              to="education"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              delay={200}
              className={`nav-item ${activeItem === 'Education' ? 'active' : ''}`}
              onClick={() => handleItemClick('Education')}
            >
              EDUCATION
            </ScrollLink>
          </NavItem>
          <NavItem>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              delay={200}
              className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`}
              onClick={() => handleItemClick('contact')}
            >
              CONTACT
            </ScrollLink>
          </NavItem>
        </NavList>
        <MobileNavButton onClick={toggleMobileNav}>
          Menu<IconWrapper><RiArrowDropDownLine /></IconWrapper>
        </MobileNavButton>

        <MobileNavMenu isOpen={isMobileNavOpen}>

          <NavHeaderContainer>
            <CloseButton onClick={toggleMobileNav}>&times;</CloseButton>
          </NavHeaderContainer>

          <NavItem>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              delay={200}
              className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}
              onClick={() => handleItemClick('about')}
            >
              ABOUT
            </ScrollLink>
            <HorizontalLine />
          </NavItem>
          <NavItem>
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              delay={200}
              className={`nav-item ${activeItem === 'Skills' ? 'active' : ''}`}
              onClick={() => handleItemClick('Skills')}
            >
              SKILLS
            </ScrollLink><HorizontalLine />
          </NavItem>
          <NavItem>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              delay={200}
              className={`nav-item ${activeItem === 'Projects' ? 'active' : ''}`}
              onClick={() => handleItemClick('Projects')}
            >
              PROJECTS
            </ScrollLink><HorizontalLine />
          </NavItem>
          <NavItem>
            <ScrollLink
              to="education"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              delay={200}
              className={`nav-item ${activeItem === 'Education' ? 'active' : ''}`}
              onClick={() => handleItemClick('Education')}
            >
              EDUCATION
            </ScrollLink><HorizontalLine />
          </NavItem>
          <NavItem>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              delay={200}
              className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`}
              onClick={() => handleItemClick('contact')}
            >
              CONTACT
            </ScrollLink>
          </NavItem>
        </MobileNavMenu>
        <ModeButton onClick={handleDarkModeToggle}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </ModeButton>
      </NavContainer>
    </ThemeProvider>
  );
};

export default Navbar
import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { lightTheme, darkTheme } from '../src/utils/Themes';
import { ThemeProvider } from "styled-components";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App

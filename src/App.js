import { React, useState } from "react";
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Project from './components/Project';
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  //put all project data here (or separate file?)
  const [navSelect] = useState([
    {
      title: "About Me",
    },
    {
      title: "Portfolio",
    },
    {
      title: "Resume"
    },
    {
      title: "Contact"
    }
  ])

  //set default to 'about me'
  const [currentNavSelect, setCurrentNavSelect] = useState(navSelect[0].title);

  return (
    <>
      <Nav
        navSelect={navSelect}
        setCurrentNavSelect={setCurrentNavSelect}
        currentNavSelect={currentNavSelect}
      />
      {/* conditionally render navigation */}
      {currentNavSelect=="Portfolio" ? (
      <Project currentNavSelect={currentNavSelect} />
      ):
      (<About></About>)
      }
      <Footer />
    </>
  );
}

export default App;

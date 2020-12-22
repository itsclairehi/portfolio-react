import { React, useState } from "react";
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Project from './components/Project';
import Header from './components/Header'

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
  const [currentNavSelect, setCurrentNavSelect] = useState(navSelect[0]);

  return (
    <>
      <Nav
        navSelect={navSelect}
        setCurrentNavSelect={setCurrentNavSelect}
        currentNavSelect={currentNavSelect}
      />
      <Project currentNavSelect={currentNavSelect} />
      <Footer />
    </>
  );
}

export default App;

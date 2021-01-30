import { React, useState } from "react";
import './App.css';
import {Nav, Footer, Project, Header, About, Contact, Resume} from './components'

function App() {

  //nav tabs 
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
      {currentNavSelect==="Portfolio" ? (
      <Project />
      ):  currentNavSelect==="Contact" ? (
        <Contact></Contact>
      ): currentNavSelect==="Resume" ? (
        <Resume></Resume>
      )
      :
      (<About></About>)
      }
      <Footer />
    </>
  );
}

export default App;

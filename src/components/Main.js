// MAIN BODY OF THE WEB, SEPARATED INTO "ABOUT ME", "WORK EXPERIENCES", AND "PROJECTS".
// > ABOUT ME CONSIST OF EDUCATION SECTION, SKILLS SECTION, AND ACHIEVEMENTS SECTION.

import React from 'react'
import Education from './Education'
import Skills from './Skills'
import Work from './Work'
import Achievements from './Achievements'
import Projects from './Projects'

class Main extends React.Component{
  render(){
    return(
      // <div className="main">
      //   <div className="one-section">
      //     <h1 className="main-title">ABOUT ME</h1>
      //     <Education />
      //     <Skills />
      //     <Achievements />
      //   </div>
      //   <Work />
      //   <Projects />
      // </div>
      <div>
        <Education />
        <Achievements />
        <Skills />
        <Work />
      </div>
    );
  }
}

export default Main;

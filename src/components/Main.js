// MAIN BODY OF THE WEB, SEPARATED INTO "ABOUT ME", "SKILLS", "WORK EXPERIENCES", AND "PROJECTS".

import React from 'react'
import Skills from './Skills'
import Work from './Work'
import Projects from './Projects'
import AboutMe from './AboutMe';

class Main extends React.Component{
  render(){
    return(
      <div>
        <AboutMe />
        <Skills />
        <Work />
        <Projects />
      </div>
    );
  }
}

export default Main;

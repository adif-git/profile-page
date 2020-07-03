import React from 'react'
import Profile from './Profile'
import Education from './Education'
import Achievements from './Achievements'
import Certifications from './Certifications'

class AboutMe extends React.Component{
  render(){
    return(
      <div>
        <Profile />
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2">
                <Education />
                <Certifications />
            </div>
        </div>
        <Achievements />
      </div>
    );
  }
}

export default AboutMe;

// PROFILE SECTION
import React from 'react'
import './Profile.css'

class Profile extends React.Component{
  render(){
    return(
      <div className="profile-section">
        <div className='background'>
          <div className="introduction ml-auto">
            <p className="">Hello! My name is</p>
            <h1 className="">LADIVA BACHRULRACHMAN</h1>
            <ul className="list-group list-group-horizontal-xl">
              <li className="list-group-item">
                <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer"><span className="fa fa-envelope"></span></a>
                adif.ladiva@gmail.com
              </li>
              <li className="list-group-item">
                <a href="https://www.linkedin.com/in/ladivab" target="_blank" rel="noopener noreferrer"><span className="fa fa-linkedin"></span></a>
                linkedin.com/in/ladivab
              </li>
              <li className="list-group-item">
                <a href="https://github.com/adif-git" target="_blank" rel="noopener noreferrer"><span className="fa fa-github" ></span></a>
                github.com/adif-git
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

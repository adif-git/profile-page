// PROFILE SECTION IN HEADER
import React from 'react'
import './Profile.css'

class Profile extends React.Component{
  render(){
    return(
      <div className="profile-section">
        <div className='background'>
          <div className="introduction ml-auto">
            <p className="">Hello! My name is</p>
            <h1 className="">Ladiva Bachrulrachman</h1>
            <div className="container-fluid header-list">
              <div className="row text-center">
                <div className="col">
                  <span className="fa fa-envelope fa-md"></span>
                </div>
                <div className="col">
                  <a className="fa fa-linkedin" href="https://www.linkedin.com/in/ladivab"></a>
                </div>
                <div className="col">
                  <a className="fa fa-github" href="https://github.com/adif-git"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

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
            <h1 className="">LADIVA BACHRULRACHMAN</h1>
            {/* <div className="container-fluid header-list d-flex justify-content-center">
              <div className="row">
                <div className="col-auto">
                  <span className="fa fa-envelope fa-md" data-toggle="tooltip" data-placement="top" title="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                </div>
                <div className="col-auto">
                  
                </div>
                <div className="col-auto">
                  
                </div>
              </div>
            </div> */}
            <ul className="list-group list-group-horizontal-xl">
              <li className="list-group-item">
                <a><span className="fa fa-envelope"></span></a>
                adif.ladiva@gmail.com
              </li>
              <li className="list-group-item">
                <a href="https://www.linkedin.com/in/ladivab"><span className="fa fa-linkedin"></span></a>
                linkedin.com/in/ladivab
              </li>
              <li className="list-group-item">
                <a href="https://github.com/adif-git"><span className="fa fa-github" ></span></a>
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

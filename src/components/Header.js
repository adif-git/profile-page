// THIS IS HEADER PART OF THE WEB

import React from 'react'
import Profile from './Profile'

class Header extends React.Component{
  render(){
    return(
      <div className='header'>
        <div className='background'></div>
        <div className='header-top' id="header-top">
          <h1>LADIVA BACHRULRACHMAN</h1>
          <div className="header-list">
            <span className="fa fa-envelope fa-lg"></span><span className="contact">adif.ladiva@gmail.com</span>
            <a className="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/ladivab"></a>
            <a className="fa fa-github fa-lg" href="https://github.com/adif-git"></a>
          </div>
        </div>
        <Profile />
      </div>
    );
  }
}

export default Header

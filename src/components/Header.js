// THIS IS HEADER PART OF THE WEB

import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import './Header.css'

class Header extends React.Component{
  render(){
    return(
      <div>
        <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark fixed-top pt-4">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-light"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="text-white font-weight-bold mr-3">About Me</Nav.Link>
              <Nav.Link className="text-white font-weight-bold mr-3">Skills</Nav.Link>
              <Nav.Link className="text-white font-weight-bold mr-3">Achievement</Nav.Link>
              <Nav.Link className="text-white font-weight-bold mr-3">Work Experiences</Nav.Link>
              <Nav.Link className="text-white font-weight-bold mr-3">Projects</Nav.Link>
              <Nav.Link className="text-white font-weight-bold mr-5">Certifications</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className='background'>
          <div className="introduction ml-auto">
            <p className="">Hello! My name is</p>
            <h1 className="">Ladiva Bachrulrachman</h1>
            <div className="container-fluid header-list">
              <div className="row text-center">
                <div class="col">
                  <span className="fa fa-envelope fa-md"></span>
                </div>
                <div class="col">
                  <a className="fa fa-linkedin fa-md" href="https://www.linkedin.com/in/ladivab"></a>
                </div>
                <div class="col">
                  <a className="fa fa-github fa-md" href="https://github.com/adif-git"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header

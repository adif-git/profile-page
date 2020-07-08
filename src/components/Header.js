// THIS IS HEADER PART OF THE WEB

import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-scroll'
import './Header.css'

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={
      //Initial state for scroll position
      position: 0,
    };
    this.listenToScroll = this.listenToScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll=()=>{
    //Get the value when scrolled vertically
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop; 
    //Measure the height (scrollHeight(with padding & margin) - clientHeight(without border,margin))
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //Scrolled value ranged from 0-1
    const scrolled = winScroll / height;
    this.setState({
      position: scrolled, 
      //Update scroll position value
    })

    let nav = document.getElementById('nav');
    //Navbar will be colored if passing profile section location
    if(this.state.position > 0.045){
        nav.classList.add("navbar-colored");
        nav.classList.remove("navbar");
    }
    else{
        nav.classList.add("navbar");
        nav.classList.remove("navbar-colored");
    }
  }
  render(){
    return(
      <div className="aboutme-section">
        <Navbar collapseOnSelect expand="lg" fixed="top" id="nav" className="navbar navbar-dark p-3 ">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-light"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link activeClass="active" to="aboutme-section" className="nav-content" offset={-60}  smooth={true} duration={500}>
                About Me
              </Link>
              <Link activeClass="active" to="skills-section" className="nav-content" offset={-60}  smooth={true} duration={500}>
                Skills
              </Link>
              <Link activeClass="active" to="work-section" className="nav-content" offset={-60} smooth={true} duration={500}>
                Work Experiences
              </Link>
              <Link activeClass="active" to="projects-section" className="nav-content" offset={-60}  smooth={true} duration={500}>
                Projects
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header

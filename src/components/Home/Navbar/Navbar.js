import React from 'react';
import { Link } from 'react-router-dom';

import user from './img/user.png';
import tools from './img/tools.png';

import './Navbar.scss';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar__nav">
        <li className="navbar__nav__logo">
          <Link to="/">Adif</Link>
        </li>
        <li className="navbar__nav__item">
          <Link to="/" className="navbar__nav__link">
            <img src={user} alt="..."></img>
            <span>My Profile</span>
          </Link>
        </li>
        <li className="navbar__nav__item">
          <Link to="/projects" className="navbar__nav__link">
            <img src={tools} alt="..."></img>
            <span>My Projects</span>
          </Link>
        </li>
        <li className="navbar__nav__item">
          <a href="mailto:adif.ladiva@gmail.com" className="navbar__nav__link">
            <i className="fa fa-envelope"></i>
            <span>adif.ladiva@gmail.com</span>
          </a>
        </li>
        <li className="navbar__nav__item">
          <a
            href="https://github.com/adif-git"
            className="navbar__nav__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
            <span>GitHub</span>
          </a>
        </li>
        <li className="navbar__nav__item">
          <a
            href="https://linkedin.com/in/ladivab"
            className="navbar__nav__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

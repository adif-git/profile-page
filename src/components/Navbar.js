import React from 'react'
import user from '../resources/icons/user.png'
import tools from '../resources/icons/tools.png'
import './Navbar.css'

const Navbar = props => {
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <a href="/profile-page" className="">
                        Adif
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/profile-page" className="nav-link">
                        <img src={user} alt='...'></img>
                        <span className="link-text">My Profile</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/profile-page/projects" className="nav-link">
                        <img src={tools} alt='...'></img>
                        <span className="link-text">My Projects</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="mailto:adif.ladiva@gmail.com" className="nav-link">
                        <i className="fa fa-envelope"></i>
                        <span className="link-text">adif.ladiva@gmail.com</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://github.com/adif-git" className="nav-link" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                        <span className="link-text">GitHub</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://linkedin.com/in/ladivab" className="nav-link" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
                        <span className="link-text">LinkedIn</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

import './Header.css'

const Header = props => {
    const [position, setPosition] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
        return () => {
            window.removeEventListener('scroll', listenToScroll)
        }
    })

    const listenToScroll = () => {
        //Get the value when scrolled vertically
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        //Measure the height (scrollHeight(with padding & margin) - clientHeight(without border,margin))
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        //Scrolled value ranged from 0-1
        const scrolled = winScroll / height;
        //Update scroll position value
        setPosition(scrolled)

        let nav = document.getElementById('home-nav');
        //Navbar will be colored if passing profile section location
        if (position > 0.01) {
            nav.style.background = 'linear-gradient(110deg, rgba(156,2,2,1) 32%, rgba(184,0,0,1) 70%)';
        }
        else {
            nav.style.background = 'linear-gradient(110deg, rgba(156,2,2,0) 32%, rgba(184,0,0,0) 70%)';
        }
    }

    return (
        <nav className="home-navbar" id="home-nav">
            <ul className="home-navbar-nav">
                <li className="home-nav-item">
                    <Link activeClass="active" to="intro-section" className="home-nav-link" smooth={true} duration={500}>
                        Introduction
                    </Link>
                </li>
                <li className="home-nav-item">
                    <Link activeClass="active" to="skills-section" className="home-nav-link" offset={-135} smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="home-nav-item">
                    <Link activeClass="active" to="works-section" className="home-nav-link" offset={-100} smooth={true} duration={300}>
                        Work Experiences
                    </Link>
                </li>
                <li className="home-nav-item">
                    <Link activeClass="active" to="education-section" className="home-nav-link" offset={-100} smooth={true} duration={300}>
                        Education
                    </Link>
                </li>
                <li className="home-nav-item">
                    <Link activeClass="active" to="achievement-section" className="home-nav-link" offset={-100} smooth={true} duration={300}>
                        Achievement
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
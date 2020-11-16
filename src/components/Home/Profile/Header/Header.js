import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import './Header.scss';

const Header = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  let nav = document.getElementsByClassName('profile__header');

  const listenToScroll = () => {
    setScrollPosition(window.pageYOffset);
    if (scrollPosition > 5) {
      nav[0].style.background = 'red';
    } else {
      nav[0].style.background = 'none';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  });

  return (
    <nav className="profile__header">
      <ul className="profile__header__nav">
        <li className="">
          <Link
            activeClass="active"
            to="intro-section"
            className="profile__header__nav__link"
            smooth={true}
            duration={500}
          >
            Introduction
          </Link>
        </li>
        <li className="">
          <Link
            activeClass="active"
            to="skills-section"
            className="profile__header__nav__link"
            offset={-135}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="">
          <Link
            activeClass="active"
            to="works-section"
            className="profile__header__nav__link"
            offset={-100}
            smooth={true}
            duration={300}
          >
            Work Experiences
          </Link>
        </li>
        <li className="">
          <Link
            activeClass="active"
            to="education-section"
            className="profile__header__nav__link"
            offset={-100}
            smooth={true}
            duration={300}
          >
            Education
          </Link>
        </li>
        <li className="">
          <Link
            activeClass="active"
            to="achievement-section"
            className="profile__header__nav__link"
            offset={-100}
            smooth={true}
            duration={300}
          >
            Achievement
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

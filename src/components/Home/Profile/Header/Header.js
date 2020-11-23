import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

import './Header.scss';

const Header = (props) => {
  let profileHeader = document.getElementsByClassName('profile__header');

  useEffect(() => {
    if (props.scrollPosition > 300) {
      profileHeader[0].style.background = '#e41520';
      profileHeader[0].style.color = 'white';
    } else {
      profileHeader[0].style.background = 'none';
      profileHeader[0].style.color = '#021740';
    }
  });

  return (
    <nav className="profile__header">
      <ul className="profile__header__nav">
        <li className="">
          <Link
            activeClass="active"
            to="profile__intro"
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
            to="profile__skills"
            className="profile__header__nav__link"
            offset={-100}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="">
          <Link
            activeClass="active"
            to="profile__works"
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
            to="profile__education"
            className="profile__header__nav__link"
            offset={-55}
            smooth={true}
            duration={300}
          >
            Education
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

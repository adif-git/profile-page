import React from 'react';
import './Footer.scss';

const Footer = (props) => {
  return (
    <footer>
      <h3>Contact me:</h3>
      <div className="footer__contacts">
        <ul>
          <li className="footer__contact">
            <a href="mailto:adif.ladiva@gmail.com" className="">
              <i className="fa fa-envelope"></i>
              <span className="">adif.ladiva@gmail.com</span>
            </a>
          </li>
          <li className="footer__contact">
            <a
              href="https://github.com/adif-git"
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github"></i>
              <span className="">adif-git</span>
            </a>
          </li>
          <li className="footer__contact">
            <a
              href="https://linkedin.com/in/ladivab"
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
              <span className="">ladivab</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

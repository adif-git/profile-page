import React from 'react'
import './Footer.css'

const Footer = props => {
    return(
        <footer>
            <div className="contacts">
                <h3>Contact me:</h3>
                <ul>
                    <li className="contact">
                        <a href="mailto:adif.ladiva@gmail.com" className="">
                            <i className="fa fa-envelope"></i>
                            <span className="">adif.ladiva@gmail.com</span>
                        </a>
                    </li>
                    <li className="contact">
                        <a href="https://github.com/adif-git" className="" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span className="">adif-git</span>
                        </a>
                    </li>
                    <li className="contact">
                        <a href="https://linkedin.com/in/ladivab" className="" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin"></i>
                            <span className="">ladivab</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="info-footer">
                <p>
                    <span>2020 &copy; </span> Created by&nbsp;
                    <a href="https://github.com/adif-git" className="" target="_blank" rel="noopener noreferrer">
                            adif-git
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
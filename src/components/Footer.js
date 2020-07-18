//FILE FOR WEB FOOTER
import React from 'react'
import './Footer.css'

class Footer extends React.Component{
  render(){
    return(
      <div className="footer-section">
        <div className="row">
          <div className="col">
            <span className="align-middle">&#169; 2020, Ladiva Bachrulrachman</span>
          </div>
          <div className="col-1">
            <a className="fa fa-linkedin fa-sm" href="https://www.linkedin.com/in/ladivab">{null}</a>
          </div>
          <div className="col-1">
            <a className="fa fa-github fa-sm" href="https://github.com/adif-git">{null}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer

//FILE FOR WEB FOOTER
import React from 'react'
import './Footer.css'

class Footer extends React.Component{
  // H1 OF FOOTER WILL BE SHOWED IF WIDTH > 1100PX

  render(){
    return(
      // <div className='footer'>
      //   <h1>&#169; 2020, Ladiva Bachrulrachman </h1>
      //   <div className="footer-list">
      //     <span className="fa fa-envelope fa-md"></span><span className="contact">adif.ladiva@gmail.com</span>
      //     <a className="fa fa-linkedin fa-md" href="https://www.linkedin.com/in/ladivab"></a>
      //     <a className="fa fa-github fa-md" href="https://github.com/adif-git"></a>
      //   </div>
      // </div>
      <div className="footer-section">
        <div className="row">
          <div className="col">
            <span className="align-middle">&#169; 2020, Ladiva Bachrulrachman</span>
          </div>
          <div className="col-1">
            <a className="fa fa-linkedin fa-sm" href="https://www.linkedin.com/in/ladivab"></a>
          </div>
          <div className="col-1">
            <a className="fa fa-github fa-sm" href="https://github.com/adif-git"></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer

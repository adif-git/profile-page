//FILE FOR WEB FOOTER
import React from 'react'

class Footer extends React.Component{
  // H1 OF FOOTER WILL BE SHOWED IF WIDTH > 1100PX

  render(){
    return(
      <div className='footer'>
        <h1>&#169; 2020, Ladiva Bachrulrachman </h1>
        <div className="footer-list">
          <span className="fa fa-envelope fa-md"></span><span className="contact">adif.ladiva@gmail.com</span>
          <a className="fa fa-linkedin fa-md" href="https://www.linkedin.com/in/ladivab"></a>
          <a className="fa fa-github fa-md" href="https://github.com/adif-git"></a>
        </div>
      </div>
    );
  }
}

export default Footer

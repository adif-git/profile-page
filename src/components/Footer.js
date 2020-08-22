//FILE FOR WEB FOOTER
import React from 'react'
import './Footer.css'

class Footer extends React.Component{
  render(){
    return(
      <div className="footer-section">
        <div className="row">
          <div className="col">
            <span className="align-middle">&#169; 2020, adif-git</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer

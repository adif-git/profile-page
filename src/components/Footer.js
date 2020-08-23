//FILE FOR WEB FOOTER
import React from 'react'
import './Footer.css'

class Footer extends React.Component{
  render(){
    return(
      <div className="footer-section">
        <div className="row">
          <div className="col">
            <span>&#169; 2020, adif-git</span>
            <a href="https://icons8.com/icon/ldnFBJIyOFs1/comparator" className="credit">Credit: Icons by Icons8</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer

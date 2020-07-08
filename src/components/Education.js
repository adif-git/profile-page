import React from 'react'
import './Education.css'

class Education extends React.Component{
  render(){
    return(
      <div className="container-fluid education-section">
        <h1 className="title"><span className="sign">&#187;</span>EDUCATION<span className="sign">&#171;</span></h1>
        <h2>Bachelor of Electrical Engineering</h2>
        <h3>Institut Teknologi Sepuluh Nopember</h3>
        <h4>August 2015 - September 2019</h4>
        <p>Concentration : Electronics</p>
        <p>GPA : 3.63 / 4.00</p>
      </div>
    );
  }
}

export default Education;

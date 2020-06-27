import React from 'react'
import './Education.css'

class Education extends React.Component{
  render(){
    return(
      // <div className="formal-section">
      //   <ul className="academic">
      //     <li className="academic-list">
      //       <h1><span className="sign">&#62;</span>EDUCATION<span className="sign">&#60;</span></h1>
      //       <h2>Bachelor of Electrical Engineering</h2>
      //       <h3>Institut Teknologi Sepuluh Nopember, Surabaya</h3>
      //       <h4>August 2015 - September 2019</h4>
      //       <p>Concentration : Electronics, GPA : 3.63 / 4.00</p>
      //     </li>
      //     <li className="academic-list">
      //       <h1><span className="sign">&#62;</span>CERTIFICATIONS<span className="sign">&#60;</span></h1>
      //       <ul className="certification">
      //         <li>
      //           <h2>Web Progressive Path</h2>
      //           <h4>Online Academy & Progate</h4>
      //         </li>
      //         <li>
      //           <h2>Introduction to Cyber Security</h2>
      //           <h4>Cisco Networking Academy</h4>
      //         </li>
      //       </ul>
      //     </li>
      //   </ul>
      // </div>

      <div className="education-section">
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

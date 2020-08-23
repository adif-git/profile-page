import React from 'react'
import certsList from '../contents/Certifications'
import './Certifications.css'

class Certifications extends React.Component{
  render(){
    return(
      <div className="container-fluid certifications-section">
        <h1 className="title"><span className="sign">&#187;</span>CERTIFICATIONS<span className="sign">&#171;</span></h1>
        <div className="row row-cols-1">
            {certsList.map((cert)=>{
              return(
                <div key={cert.id}>
                  <h2>{cert.title}</h2>
                  <h4>{cert.organization}</h4>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Certifications;

import React from 'react'
import './Certifications.css'

class Certifications extends React.Component{
  render(){
    const certList = [
      {
        id: '1',
        title: 'Web Development Path (Node.js)',
        organization: 'Progate'
      },
      {
        id: '2',
        title: 'Online Academy HTML, CSS, JavaScript',
        organization: 'Kementerian Komunikasi dan Informatika RI'
      },
      {
        id: '3',
        title: 'Introduction to Cyber Security',
        organization: 'Cisco'
      },
    ];
    return(
      <div className="certifications-section">
        <h1 className="title"><span className="sign">&#187;</span>CERTIFICATIONS<span className="sign">&#171;</span></h1>
        <div className="row row-cols-1">
            {certList.map((cert)=>{
              return(
                <div className="col" key={cert.id}>
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

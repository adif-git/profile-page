import React, {useState} from 'react'
import certsList from '../contents/Certifications'
import './Education.css'

const Education = props => {
    const [certificates] = useState(certsList)

    return(
        <div className="education-section">
            <div className="header-section">
                <h1>EDUCATION</h1>
            </div>
            <div className="body-section">
                <div className="education">
                    <div className="degree">
                        <h3>Bachelor of Electrical Engineering</h3>
                        <h4>Institut Teknologi Sepuluh Nopember</h4>
                        <p>Concentration : Electronics</p>
                        <p>GPA : 3.63 / 4.00</p>
                    </div>
                    <div className="certifications">
                        <h2>Certifications: </h2>
                        <div className="certificate">
                            {certificates.map((certificate)=>{
                                return(
                                    <div key={certificate.id}>
                                        <h3>{certificate.title}</h3>
                                        <h4>{certificate.organization}</h4>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
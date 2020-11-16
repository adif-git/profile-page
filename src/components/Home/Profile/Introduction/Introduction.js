import React from 'react'
import Particles from 'react-particles-js'
import './Introduction.css'
import Adif from '../resources/Adif.jpg'

const Introduction = props => {
    return(
        <>
        <div className="intro-section">
            <Particles
                canvasClassName="particles"
                height='100vh'
                params={{
                    "fpslimit": 60,
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": true
                            }
                        },
                        "size": {
                            "value": 10,
                            "random": true
                        },
                        "move": {
                            "direction": "bottom",
                            "out_mode": "out"
                        },
                        "line_linked": {
                            "enable": false
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    },
                }} />
            <div className="overlay">
                <img src={Adif} className="profile" alt="..."></img>
                <div className="introduction">
                    <p className="welcome welcome-anim">I'm <span className="name">Adif</span> from <span className="country">Indonesia</span>!</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Introduction
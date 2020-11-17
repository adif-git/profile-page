import React from 'react';
import Particles from 'react-particles-js';

import './Introduction.scss';

const Introduction = (props) => {
  return (
    <>
      <div className="profile__intro">
        <Particles
          canvasClassName="profile__intro__particles"
          height="100vh"
          params={{
            fpslimit: 40,
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                },
              },
              color: {
                value: '#032059',
              },
              size: {
                value: 5,
                random: true,
              },
              move: {
                direction: 'bottom',
                out_mode: 'out',
              },
              line_linked: {
                enable: false,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
        />

        <div className="profile__intro__overlay">
          {/* <div className="introduction">
            <p className="welcome welcome-anim">
              I'm <span className="name">Adif</span> from
              <span className="country"> Indonesia</span>!
            </p>
          </div> */}
          <div className="intro__container">
            <div className="intro__container__hello">
              <h2>HELLO!</h2>
            </div>
            <div className="intro__container__name">
              <span className="fadeInUp">I'M&nbsp;</span>
              <span className="fadeInDown">ADIF</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;

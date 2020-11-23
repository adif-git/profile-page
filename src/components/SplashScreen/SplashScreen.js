import React from 'react';

import './SplashScreen.scss';

const SplashScreen = (props) => {
  return (
    <div className="splash">
      <div className="splash__box">
        <div className="splash__title">
          <span className="splash__block"></span>
          <h1>
            WELCOME<span>!</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

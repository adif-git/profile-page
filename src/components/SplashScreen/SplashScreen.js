import React from 'react';
import Logo from './icon-lg.png';

import './SplashScreen.scss';

const SplashScreen = (props) => {
  return (
    <div className="splash">
      <img src={Logo} alt="..." className="splash__logo"></img>
      <h1 className="splash__text">Welcome to my profile page!</h1>
    </div>
  );
};

export default SplashScreen;

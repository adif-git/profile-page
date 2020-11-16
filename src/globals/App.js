import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Home/Navbar/Navbar';
import SplashScreen from '../components/SplashScreen/SplashScreen';
import Home from '../components/Home/Home';
import Projects from '../components/Home/Projects/Projects';

import './app.scss';

const App = () => {
  const [splash, setSplash] = useState(false);

  useEffect(() => {
    const splashTime = setTimeout(() => setSplash(true), 2000);
    return () => {
      clearTimeout(splashTime);
    };
  }, []);

  return (
    <div>
      {splash ? (
        <Router basename="/">
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </main>
        </Router>
      ) : (
        <SplashScreen />
      )}
    </div>
  );
};

export default App;

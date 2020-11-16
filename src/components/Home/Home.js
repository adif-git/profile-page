import React from 'react';

import Header from './MyProfile/Header/Header';
import Introduction from './Introduction';
import Skills from './Skills';
import Works from '../Works';
import Education from './Education';
import Achievement from './Achievement';
import Footer from './MyProfile/Footer/Footer';

const Home = (props) => {
  return (
    <>
      <Header />
      <Introduction />
      <Skills />
      <Works />
      <Education />
      <Achievement />
      <Footer />
    </>
  );
};

export default Home;

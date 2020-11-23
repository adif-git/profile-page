import React, { useEffect, useState } from 'react';

import Header from './Profile/Header/Header';
import Introduction from './Profile/Introduction/Introduction';
import Skills from './Profile/Skills/Skills';
import WorkExperience from './Profile/WorkExperience/WorkExperience';
import Education from './Profile/Education/Education';
import Footer from './Profile/Footer/Footer';

const Home = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const listenToScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  });

  return (
    <>
      <Header scrollPosition={scrollPosition} />
      <Introduction />
      <Skills scrollPosition={scrollPosition} />
      <WorkExperience scrollPosition={scrollPosition} />
      <Education scrollPosition={scrollPosition} />
      <Footer />
    </>
  );
};

export default Home;

// MAIN PART FOR REACT.JS WEB
// SEPARATED INTO 3 MAIN PARTS: HEADER, MAIN, AND FOOTER

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

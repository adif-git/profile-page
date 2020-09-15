import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'

class App extends React.Component {
  render() {
    return (
      <Router basename='/'>
        <Navbar/>
        <main>
          <Route exact path='/' component={Home}/>
          <Route path='/projects' component={Projects}/>
        </main>
      </Router>
    );
  }
}

export default App;

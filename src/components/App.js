import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'

class App extends React.Component {
  render() {
    return (
      <Router>
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

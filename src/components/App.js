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
          <Route exact path='/profile-page' component={Home}/>
          <Route path='/profile-page/projects' component={Projects}/>
        </main>
      </Router>
    );
  }
}

export default App;

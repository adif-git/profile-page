import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'

class App extends React.Component {
  render() {
    return (
      <Router basename='/'>
        <Navbar/>
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/projects' component={Projects}/>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;

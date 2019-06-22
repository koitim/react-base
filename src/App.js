import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Topo from './Topo';
import Rodape from './Rodape';
import Taskboard from './Taskboard';
import About from './About';
import Devs from './Devs';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>      
          <Topo/>

          <Switch>
            <Route exact path='/' component={Taskboard}/>
            <Route path='/about' component={About}/>
            <Route path='/devs' component={Devs}/>
          </Switch>

          <Rodape/>
      </div>
    );
  }
}

export default App;

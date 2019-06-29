import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Topo from './Topo';
import Rodape from './Rodape';
import Taskboard from './Taskboard';
import About from './About';
import Devs from './Devs';
import { Switch, Route } from 'react-router-dom';
import ManageDev from './ManageDev';
import Messages from './commons/Messages';

class App extends Component {
  render() {
    return (
      <div>
        <Topo />
        <Switch>
          <Route exact path='/' component={Taskboard} />
          <Route path='/devs' component={Devs} />
          <Route exact path='/dev' component={ManageDev}/>
          <Route path='/dev/:id' component={ManageDev}/>
          <Route path='/about' component={About} />
        </Switch>
        <Rodape />
        <Messages />
      </div>
    );
  }
}

export default App;

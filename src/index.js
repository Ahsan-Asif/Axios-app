import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import {Route, Redirect, HashRouter, Router, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import createHashHistory from 'history/createHashHistory';

class Navigation extends Component{
  render(){
    const history = createHashHistory();
     return(
        <Router history={history}>
          <Switch>
             <Route exact path="/app" component={App} />
             <Route path="/home" component={Home} />
          </Switch>
      </Router>
    );
  }
}


ReactDOM.render(<Navigation />, document.getElementById('root'));
registerServiceWorker();

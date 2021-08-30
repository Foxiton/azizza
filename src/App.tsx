import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Dashboard  from "./screens/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/reports' />
          <Route path='/messages' />
          <Route path='/settings' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

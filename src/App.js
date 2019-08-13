import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './pages/profile';
import './App.css'


function App() {
  return (
    <div className="App" style={{margin:0, padding: 0}}>
      <Switch>
        <Route exact path="/" component={Profile}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/projects"  component={Profile}/>
        <Route exact path="/signup" component={Profile}/>
      </Switch>
    </div>
  );
}

export default App;

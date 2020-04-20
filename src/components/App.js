import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../routes/home';
import '../assets/sass/global.scss'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

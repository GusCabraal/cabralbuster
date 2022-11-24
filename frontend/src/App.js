import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Movies from './pages/Movies';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/movies" component={ Movies } />
    </Switch>
  );
}

export default App;
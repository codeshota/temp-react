import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Item from './pages/Item';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/catalog/:slug" component={Item} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

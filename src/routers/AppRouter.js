import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import HomePage from '../components/HomePage';
import PokemonPage from '../components/PokemonPage';
import TypesPage from '../components/TypesPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/pokemon/:name" exact component={PokemonPage} />
      <Route path="/type/:id" exact component={TypesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;

import React, { Fragment } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/404/404';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Home from '../src/Home/Home';
import Website from '../src/Website/Website';
import Twitch from '../src/Twitch/Twitch';
import Todos from '../src/Todos/Todos';
import Reduxulator from '../src/Reduxulator/containers/Reduxulator';
import Fortnite from '../src/Fortnite/Fortnite';

import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/website" component={Website} />
          <Route path="/twitch" component={Twitch} />
          <Route path="/todos" component={Todos} />
          <Route path="/reduxulator" component={Reduxulator} />
          <Route path="/fortnite" component={Fortnite} />
          <Route component={PageNotFound} />
        </Switch>
      <ScrollTop />
    </Fragment>
  </Router>
);

export default App;
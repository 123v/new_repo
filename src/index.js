import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Header from './CommonLayout/Header';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/parameter_pricing" component={Dashboard} />
          <Route exact path="/" component={Header} />
      </Switch>
    </BrowserRouter>,document.getElementById('root')
);

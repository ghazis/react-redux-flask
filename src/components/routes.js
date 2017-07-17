import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './homePage';
import Page2 from './page2';
import Page3 from './page3';

export default (
      <Switch>
        <Route exact path='/home' component={HomePage} />
        <Route path='/page2' component={Page2} />
        <Route path='/page3' component={Page3} />
      </Switch>
);

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ClassAnalytics from './pages/ClassAnalytics';
import FinancialAnalytics from './pages/FinancialAnalytics';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/class-analytics" component={ClassAnalytics} />
          <Route path="/financial-analytics" component={FinancialAnalytics} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

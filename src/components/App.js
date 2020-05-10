import React from 'react';
import Header from './common/Header';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import MainPage from './MainPage/MainPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/games" component={MainPage} />
        <Route path="/math" component={MainPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;

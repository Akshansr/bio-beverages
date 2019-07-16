import React from 'react';
import './App.css';
import BeverageMenu from './components/BeverageMenu';
import BeverageQueue from './components/BeverageQueue';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';


const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/" component={BeverageMenu} exact={true} />
            <Route path="/beverageQueue" component={BeverageQueue} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

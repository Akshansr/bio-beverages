import React from 'react';
import './App.css';
import BeverageMenu from './components/BeverageMenu';
import BeverageQueue from './components/BeverageQueue';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={BeverageMenu} exact={true} />
            <Route path="/beverageQueue" component={BeverageQueue} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

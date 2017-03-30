import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
}from 'react-router-dom'


import App from './App';
import './index.css';
import People from './components/People'
import reducers  from './reducers'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/news" component={App} />
        <Route path="/people" component={People} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'
  )
);

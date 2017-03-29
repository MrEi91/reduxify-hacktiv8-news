import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import People from './components/People'
import {
  BrowserRouter as Router,
  Route
}from 'react-router-dom'
import { createStore } from 'redux'

const store = createStore(reducer)

ReactDOM.render(
  <Provider>
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

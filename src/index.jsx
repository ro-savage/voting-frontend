import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Map} from 'immutable';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer'
import {setState} from './action_creator'
import remoteActionMiddleware from './remote_action_middleware'
import App from './components/App'
import {VotingContainer} from './components/Voting'
import {ResultsContainer} from './components/Results'

// TODO: Check why PropTypes doesn't work properly
// TODO: Create end vote button and next vote button
// TODO: Display the winners of previous rounds (in a tree?)
// TODO: Allow final round of voting
// TODO: Add ability to have multiple choices
// TODO: Add admin interface to create choices
// TODO: Allow multiple votes to go on at one time
// TODO: Create unique URLS for each vote
// TODO: Add ESLint or standards
// TODO: Add Material-UI
// TODO: Add inline styles using postCSS
// TODO: Add real database on the backend
// TODO: Add multiple vote prevention (maybe maximum votes allowed)
// TODO: Add autoending when all votes cast

const socket = io(`${location.protocol}//${location.hostname}:8090`);

const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware(socket))(createStore)
const store = createStoreWithMiddleware(reducer, Map(), window.devToolsExtension ? window.devToolsExtension() : undefined);

socket.on('state', (state) => {
  store.dispatch(setState(state))
})

const routes = (
  <Route component={App}>
    <Route path="/results" component={ResultsContainer} />
    <Route path="/" component={VotingContainer} />
  </Route>
)


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
    document.getElementById('app')
)

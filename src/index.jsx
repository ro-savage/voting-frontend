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

const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware)(createStore)
const store = createStoreWithMiddleware(reducer, Map(), window.devToolsExtension ? window.devToolsExtension() : undefined);


const socket = io(`${location.protocol}//${location.hostname}:8090`);
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

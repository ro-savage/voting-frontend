import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {createStore} from 'redux'
import {Map} from 'immutable';
import {Provider} from 'react-redux';
import reducer from './reducer'
import App from './components/App'
import {VotingContainer} from './components/Voting'
import {ResultsContainer} from './components/Results'

const store = createStore(reducer, Map(), window.devToolsExtension ? window.devToolsExtension() : undefined);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Export', 'Import'],
      tally: {Export: 2}
    }
  }
});

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

//   <Voting pair={pair} vote={()=> {console.log('OMG')}} hasVoted="Export" />,


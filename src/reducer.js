import {List, Map} from 'immutable';

function setState(state, newState) {
  // Merge new state with old state. New state will overwrite.
  // Becauses its an ImmutableJS object it will return a new state object.
  return state.merge(newState)
}

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair'])
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry)
  } else {
    return state
  }
}

function resetVote(state) {
  const hasVoted = state.get('hasVoted')
  const currentPair = state.getIn(['voted', 'pair'], List())

  if (hasVoted && !currentPair.includes(hasVoted)) { // Check if the hasVoted prop value is contained in the currentPair array/list
    return state.remove('hasVoted')
  } else {
    return state
  }
}

export default function(state = Map(), action) {

  switch (action.type) {
    case 'SET_STATE':
      return resetVote(setState(state, action.state))
    case 'VOTE':
      return vote(state, action.entry)
  }

  return state;
}
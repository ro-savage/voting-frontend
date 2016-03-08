import {Map} from 'immutable';

function setState(state, newState) {
  // Merge new state with old state. New state will overwrite.
  // Becauses its an ImmutableJS object it will return a new state object.
  return state.merge(newState)
}

export default function(state = Map(), action) {

  switch (action.type) {
    case 'SET_STATE' :
      return setState(state, action.state)
  }

  return state;
}
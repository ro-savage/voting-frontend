import React from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Export', 'Import');
const tally = Map({'Export': 5, 'Import': 4})
const vote = () => {console.log('OMG')}

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return React.cloneElement(this.props.children, {
      pair: pair,
      vote: vote,
      tally: tally
    })
  }
}

export default App
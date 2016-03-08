import React from 'react';
import {List} from 'immutable';

const pair = List.of('Export', 'Import');

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return React.cloneElement(this.props.children, {pair: pair, vote: ()=> {console.log('OMG')}})
  }
}

export default App
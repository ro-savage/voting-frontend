import React from 'react';
import { Link } from 'react-router'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>
          {this.props.children}
        </div>
        <div>
          <p><Link to=''>Vote</Link> | <Link to="results">Results</Link></p>
        </div>
      </div>
    )
  }
}

import React from 'react'
import Winner from './Winner.jsx'
import Vote from './Vote.jsx'

class Voting extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />
        }
      </div>
    )
  }
}

export default Voting
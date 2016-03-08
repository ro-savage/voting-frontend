import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux'
import Winner from './Winner.jsx'
import Vote from './Vote.jsx'

export class Voting extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner'),
    vote: (vote) => {console.log(`voted for ${vote}!`)}
  }
}

export const VotingContainer = connect(mapStateToProps)(Voting)
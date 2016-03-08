import React from 'react'

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.getPair = this.getPair.bind(this)
    this.isDisabaled = this.isDisabaled.bind(this)
    this.hasVotedFor = this.hasVotedFor.bind(this)
  }
  getPair() {
    return this.props.pair || []
  }
  isDisabaled() {
    //Check if value is truthy or false, and return true or false
    return !!this.props.hasVoted
  }
  hasVotedFor(entry) {
    return this.props.hasVoted === entry
  }
  render() {
    return (
      <div className="voting">
        {this.getPair().map((entry) => {
          return (
            <button key={entry}
                    onClick={() => this.props.vote(entry)}
                    disabled={this.isDisabaled()}>
              <br />
              <h1>{entry}</h1>
              {this.hasVotedFor(entry) ? <div className="label">Voted</div> : <br />}
            </button>
          )})}
      </div>
    )
  }
}

Vote.propTypes = {
  pair: React.PropTypes.array,
  vote: React.PropTypes.func,
  hasVoted: React.PropTypes.string,
}

export default Vote
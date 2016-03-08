import React from 'react'

class Voting extends React.Component {
  constructor(props) {
    super(props);
    this.getPair = this.getPair.bind(this)
  }
  getPair() {
    return this.props.pair || []
  }
  render() {
    return (
      <div className="voting">
        {this.getPair().map((entry) => {
          return (
            <button key={entry}>
              <h1>{entry}</h1>
            </button>
          )})}
      </div>
    )
  }
}

Voting.propTypes = { pair: React.PropTypes.array }

export default Voting
import React from 'react'
import ReactDOM from 'react-dom'
import Voting from './components/Voting'

const pair = ['Export', 'Import']

ReactDOM.render(
  <Voting winner={'Export'} pair={pair} vote={()=> {console.log('OMG')}} />,
    document.getElementById('app')
)

//   <Voting pair={pair} vote={()=> {console.log('OMG')}} hasVoted="Export" />,


import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  result: state.math.result,
  currentNumber: state.math.currentNumber
});

export default connect(mapStateToProps)(props => {
  return (
    <div>
      {JSON.stringify(props)}
    </div>
  )
})

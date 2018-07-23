import React from 'react';
import Nested from './Nested';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as mathActions from '../../actions/mathActions';

const Calc = props => {
  let operation;
  const setOperator = operator => operation = operator;
  const execOperation = () => { if (operation) operation(props.currentNumber); }

  return (
    <div>
      <button onClick={() => (setOperator(props.addNum))}>ADD</button>
      <button onClick={() => (setOperator(props.subNum))}>SUB</button>
      <button onClick={() => (setOperator(props.mulNum))}>MUL</button>
      <button onClick={() => (setOperator(props.divNum))}>DIV</button>
      <button onClick={() => (setOperator(props.modNum))}>MOD</button>
      <button onClick={() => (props.setNum(3))}>3</button>
      <button onClick={execOperation}>EXEC</button>
      <span style={{ padding: '1rem' }}>Value: {props.currentNumber}</span>
      <span>Result: {props.result}</span>
      <Nested />
    </div>
  );
}

Calc.propTypes = {
  addNum: PropTypes.func.isRequired,
  number: PropTypes.string,
  result: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  result: state.math.result,
  currentNumber: state.math.currentNumber
});


export default connect(mapStateToProps, mathActions)(Calc);

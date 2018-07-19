import { 
  MATH_SET_NUMBER, 
  MATH_ADD, 
  MATH_SUB, 
  MATH_MUL, 
  MATH_DIV, 
  MATH_MOD 
} from '../actions/types';

export const setNum = num => dispatch => dispatch({ type: MATH_SET_NUMBER, payload: num });

export const addNum = num => dispatch => dispatch({ type: MATH_ADD, payload: num });

export const subNum = num => dispatch => dispatch({ type: MATH_SUB, payload: num });

export const mulNum = num => dispatch => dispatch({ type: MATH_MUL, payload: num });

export const divNum = num => dispatch => dispatch({ type: MATH_DIV, payload: num });

export const modNum = num => dispatch => dispatch({ type: MATH_MOD,payload: num });
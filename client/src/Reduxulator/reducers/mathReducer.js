import { 
  MATH_SET_NUMBER, 
  MATH_ADD, 
  MATH_SUB, 
  MATH_MUL, 
  MATH_DIV, 
  MATH_MOD 
} from '../actions/types';

const initialState = { result: null, currentNumber: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case MATH_SET_NUMBER:
      return {
        ...state,
        currentNumber: state.currentNumber + action.payload
      }
    case MATH_ADD:
      return {
        ...state,
        result: state.result + Number(action.payload),
        currentNumber: ''
      }
    case MATH_SUB:
      return {
        ...state,
        result: Number(action.payload),
        currentNumber: ''
      }
    case MATH_MUL:
      return {
        ...state,
        result: state.result ? state.result * Number(action.payload) : 1 * Number(action.payload),
        currentNumber: ''
      }
    case MATH_DIV:
      return {
        ...state,
        result: state.result / Number(action.payload),
        currentNumber: ''
      }
    case MATH_MOD:
      return {
        ...state,
        result: state.result % Number(action.payload),
        currentNumber: ''
      }
    default:
      return state;
  }
}

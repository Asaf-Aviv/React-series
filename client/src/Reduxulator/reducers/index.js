import { combineReducers } from 'redux';
import mathReducer from './mathReducer';

export default combineReducers({
  math: mathReducer
});

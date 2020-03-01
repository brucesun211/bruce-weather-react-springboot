import pollReducer from './pollReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  polls: pollReducer
});
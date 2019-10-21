import { combineReducers } from 'redux';
import gnomes from './gnomes';
import page from './page';

export default combineReducers({
  gnomes,
  page,
});

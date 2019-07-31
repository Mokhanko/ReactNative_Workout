import { combineReducers } from 'redux';
import ui from './ui';
import exercises from './exercises';
import currWork from './currWork';
import categories from './categories';
import user from './user';

export default combineReducers({
  ui,
  exercises,
  currWork,
  categories,
  user
});

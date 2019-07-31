import { createAction, handleActions } from 'redux-actions';
import * as api from '../services/api';

const initialState = {
  isCurrWorkComplete: false,
  isAddExerciseComplete: false
};

const fetchWorkoutComplete = createAction(
  'FETCH_CURR_WORKOUT_COMPLETE',
  payload => ({ payload })
);
const addExerciseComplete = createAction(
  'ADD_EXERCISE_COMPLETE',
  payload => ({ payload })
);

const fetchWorkout = createAction('FETCH_CURRENT_WORKOUT');

const addExercise = createAction('ADD_EXERCISE');

const createAsyncCreator = (startAction, endAction, asycnFn) => dispatch => {
  dispatch(createAction(startAction)());
  const dispatchEndAction = createAction(endAction);
  return asycnFn(dispatch)
    .then(result => dispatch(dispatchEndAction(result)))
    .catch(e => {
      console.error(e);
      dispatch(dispatchEndAction(e));
    });
};

export const fetchCurrentWorkout = () => (
  createAsyncCreator(
    fetchWorkout,
    fetchWorkoutComplete,
    () => api.get('current_workout')
  )
);


export const addExerciseToCurrentWorkout = (exercise) => (
  createAsyncCreator(
    addExercise,
    addExerciseComplete,
    () => api.post('current_workout', exercise)
  )
);

export default handleActions(
  {
    [fetchWorkoutComplete]: (state, { payload }) => ({
      isCurrWorkComplete: payload
    }),
    [addExerciseComplete]: (state, { payload }) => ({
      isAddExerciseComplete: payload
    })
  },
  initialState
);

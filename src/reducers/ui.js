import { createAction, handleActions } from 'redux-actions';

const initialState = {
  activeTab: 0,
  exerciseModal: false
};

export const changeTab = createAction('CHANGE_TAB', payload => ({ payload }));

export const setExerciseVisibility = createAction(
  'SET_EXECERCISE_VISIBILITY',
  payload => ({ payload })
);

export default handleActions(
  {
    [changeTab]: (state, { payload }) => ({
      activeTab: payload
    }),
    [setExerciseVisibility]: (state, { payload }) => ({
      exerciseModal: payload.payload
    })
  },
  initialState
);

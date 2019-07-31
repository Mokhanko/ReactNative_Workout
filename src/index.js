import React from 'react';
import { Provider } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import { store } from './store';
import Welcome from './screens/Welcome';
import Main from './screens/App/Main';

const Root = ({ started, startWorkout }) => (
  <Provider store={store}>
    {started ? (
      <Main />
    ) : (
      <Welcome started={started} startWorkout={startWorkout} />
    )}
  </Provider>
);

export default compose(
  withState('started', 'setStart', false),
  withHandlers({
    startWorkout: props => event => {
      event.preventDefault();
      props.setStart(true);
    }
  })
)(Root);

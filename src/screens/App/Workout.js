import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StyleSheet } from 'react-native';
import Topbar from '../../components/TopBar';
import { setExerciseVisibility } from '../../reducers/ui';
import WorkoutList from '../../components/WorkouList';
import ExerciseModal from '../../components/ExeciseModal';


const Workout = ({ currentWorkOut, exercises, setModalVisibility, execiseModal }) => (
  <View style={styles.container}>
    <Topbar style={styles.topbar}>
      <Text style={styles.topbarText}>Current Workout</Text>
    </Topbar>
    <View style={styles.currentWorkout}>
      <WorkoutList
        setModalVisibility={setModalVisibility}
        currentWorkout={currentWorkOut}
      />
    </View>
    <ExerciseModal
      exercises={exercises}
      execiseModal={execiseModal}
      setModalVisibility={setModalVisibility}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topbar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
    borderBottomWidth: 2
  },
  topbarText: {
    color: '#AB88E7',
    fontSize: 26
  },
  currentWorkout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default compose(
  connect(
    state => ({
      currentWorkout: state.currWork,
      execiseModal: state.ui.exerciseModal,
      exercises: state.exercises
    }),
    {
      setExerciseVisibility
    }
  ),
  withState('currentWorkOut', 'setCurrWorkout', []),
  withHandlers({
    setModalVisibility: props => event => {
      event.preventDefault();
      props.setExerciseVisibility(!props.execiseModal);
    }
  })
)(Workout);

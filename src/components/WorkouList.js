import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const WorkoutList = ({ currentWorkOut = [], setModalVisibility }) => (
  <View style={styles.addSomeExecercises}>
    <Text style={styles.bigText}>add some exercises</Text>
    <TouchableOpacity
      onPress={e => setModalVisibility(e)}
      style={styles.plusButton}
    >
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  addSomeExecercises: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  bigText: {
    fontSize: 24,
    color: 'blue'
  },
  plusButton: {
    borderStyle: null,
    borderWidth: 0
  },
  plus: {
    color: 'black',
    fontSize: 60
  },
  workoutList: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: width * 0.8
  },
  workout: {
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: 1,
    padding: 10
  },
  workoutText: {
    color: 'white',
    fontSize: 24
  }
});

export default WorkoutList;

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Welcome = ({ started, startWorkout }) => (
  <LinearGradient colors={['#FF9500', '#FF5E3A']} style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Sweatbook</Text>
    </View>
    <View style={styles.lastWorkoutContainer}>
      <Text style={styles.lastWorkoutTitle}>Log your fitness</Text>
    </View>
    <View style={styles.startWorkout}>
      <TouchableOpacity style={styles.button} onPress={startWorkout}>
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titleContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2
  },
  title: {
    fontSize: 48,
    fontWeight: '500',
    color: '#2D5D7B',
    textAlign: 'center'
  },
  lastWorkoutContainer: {
    marginTop: 200,
    flex: 0.3
  },
  lastWorkoutTitle: {
    fontSize: 30,
    fontWeight: '100',
    color: '#242325'
  },
  startWorkout: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 300
  },
  button: {
    padding: 10
  },
  buttonText: {
    color: '#053225'
  }
});

export default Welcome;

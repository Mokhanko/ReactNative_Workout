import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Topbar from './TopBar';

const ExerciseList = props => {
  return (
    <View>
      <FlatList
        data={props.exercises}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default ExerciseList;

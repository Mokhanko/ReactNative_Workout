import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { compose, withState, withHandlers } from 'recompose';

const SearchBar = props => (
  <View style={styles.container}>
    <TextInput
      style={styles.text}
      value={props.searchTerm}
      onChange={props.handleTextChange}
      underlineColorAndroid={'transparent'}
    />
  </View>
);

const border = {
  borderColor: 'black',
  borderRadius: 1,
  borderWidth: 1
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 1,
    backgroundColor: 'white',
    height: 60
  },
  text: {
    color: 'black',
    fontSize: 24
  }
});

export default compose(
  withState('searchTerm', 'changeTerm', 'Input'),
  withHandlers({
    handleTextChange: props => event => {
      props.changeTerm();
    }
  })
)(SearchBar);

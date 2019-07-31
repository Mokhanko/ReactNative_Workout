import React from 'react';
import { View, StyleSheet } from 'react-native';

const Topbar = props => (
  <View style={[styles.container, props.style]}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 30
  }
});

export default Topbar;

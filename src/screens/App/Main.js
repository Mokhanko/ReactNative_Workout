import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import TabView from 'react-native-scrollable-tab-view';
import Workout from './Workout';

const Main = () => (
  <LinearGradient colors={['#CDBAFF', '#7AC2EF']} style={{ flex: 1 }}>
    <TabView tabBarPosition="overlayBottom">
      <Workout tabLabel="+" />
    </TabView>
  </LinearGradient>
);

export default Main;

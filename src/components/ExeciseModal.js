import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { compose, withState, withHandlers } from 'recompose';
import LinearGradient from 'react-native-linear-gradient';
import { search } from '../services/search';
import TopBar from './TopBar';
import ExerciseList from './ExerciseList';
import SearchBar from './SearchBar';

const ExerciseModal = ({
  exercises,
  execiseModal,
  setModalVisibility,
  handleTextChange
}) => (
  <Modal
    style={{ flex: 1 }}
    animationType={'slide'}
    visible={execiseModal}
    closeModal={e => setModalVisibility(e)}
  >
    <View>
      <TopBar>
        <LinearGradient colors={['#87FC70', '#0BD318']}>
          <SearchBar />
        </LinearGradient>
      </TopBar>
      <ExerciseList exercises={exercises} />
      <TouchableOpacity onPress={e => setModalVisibility(e)}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

export default compose(
  withState('foundExercises', 'setFoundExercises', []),
  withHandlers({
    handleTextChange: text => props => event => {
      props.setFoundExercises = search(text, props.exercises, 'name');
    }
  })
)(ExerciseModal);

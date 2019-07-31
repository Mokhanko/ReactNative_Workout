import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import ExerciseList from './ExerciseList';

const ExerciseModal = ({ execiseModal, setModalVisibility }) => (
  <Modal
    style={{ flex: 1 }}
    animationType={'slide'}
    visible={execiseModal}
    closeModal={e => setModalVisibility(e)}
  >
    <View>
      <Text>Modal</Text>
      <TouchableOpacity onPress={e => setModalVisibility(e)}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

export default ExerciseModal;

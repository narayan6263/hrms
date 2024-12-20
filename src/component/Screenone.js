import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenOne = () => {
  return (
    <View style={styles.container}>
      <Text>Screen One</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenOne;

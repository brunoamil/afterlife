import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.center}>Afterlife</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    fontSize: 40,
    color: '#312e81'
  }
});

export default App;

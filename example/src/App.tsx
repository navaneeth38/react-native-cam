import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Camera } from 'react-native-cam';

export default function App() {
  

  return (
    <View style={styles.container}>
      <Camera />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});


import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { promiseText, resApi, wait2Seconds, wait2SecondsAsync } from './importPromise';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
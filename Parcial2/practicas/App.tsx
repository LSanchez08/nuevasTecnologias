import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './components/Hello';

export default function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    setTimeout(() => {
      setMessage('Hola Mundo')
    }, 2000);
  }, [setMessage]);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{message}</Text>
      <Hello text={message} setText={setMessage}></Hello>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  sectionTitle: {
    textAlign: 'center'
  }
});

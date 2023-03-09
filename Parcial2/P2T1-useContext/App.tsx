import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './components/Hello';
import ContextTest from './components/context/ContextTest';
import RefTest from './components/RefTest/RefTest';
import { User, UserContext } from './imports/userContext';

export default function App() {
  const [message, setMessage] = useState('Loading...');

  const [user, setUser] = useState<User>({
    id: 0,
    name: 'Luis',
    age: 22,
    address: 'Some address.'
  });

  useEffect(() => {
    setTimeout(() => {
      setMessage('Hola Mundo')
      setUser({
        ...user,
        address: 'Conkal'
      })
    }, 2000);
  }, [setMessage]);

  return (
    <UserContext.Provider value={user}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>{message}</Text>
        {/* <Hello text={message} setText={setMessage}></Hello> */}
        <ContextTest></ContextTest>
        <RefTest/>
        <StatusBar style="auto" />
      </View>
    </UserContext.Provider>
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

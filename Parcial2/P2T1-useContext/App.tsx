import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TopContainer from './components/TopContainer';
import BottomContainer from './components/BottomContainer';
import MiddleContainer from './components/MiddleContainer';
import { User, UserContext } from './imports/userContext';

export default function App() {
  const [user, setUser] = useState<User>({
    id: 0,
    name: 'Luis',
    lastName: 'Sánchez',
    age: 22,
    department: 'Sales',
    startingDate: '06/20/2020',
    city: 'Mérida',
    state: 'Yucatán',
    country: 'México'
  });

  return (
    <UserContext.Provider value={user}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/favicon.png')}/>
        <TopContainer></TopContainer>
        <MiddleContainer></MiddleContainer>
        <BottomContainer></BottomContainer>
        <StatusBar style="auto" />
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#34495e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100
  },
  sectionTitle: {
    textAlign: 'center'
  }
});

import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { User, UserContext } from '../../imports/userContext';


export default function ContextTest() {

  const { id, name, age, address } = useContext<User>(UserContext);
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{`${id} ${name} ${age} ${address}`}</Text>
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

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { User, UserContext } from '../imports/userContext';

export default function BottomContainer() {
  const { state, city, country } = useContext<User>(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{`Location: ${city}, ${state}, ${country}`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    width: 300
    // justifyContent: 'center',
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center'
  }
});

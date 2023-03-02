import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HelloAttributes {
  text: string,
  setText?: Function
};

export default function Hello({ text, setText } : HelloAttributes) {

  useEffect(() => {
    setTimeout(() => {
      setText && setText('Hola Mundo from Hello');
    }, 5000);
  }, [setText]);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{text}</Text>
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

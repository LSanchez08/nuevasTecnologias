import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { User, UserContext } from '../../imports/userContext';


export default function RefTest() {
  const [inputValue , setInputValue] = useState('');
  const count = useRef(0);

  useEffect(() => {
    count.current += 1;
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.sectionTitle}
        value={inputValue} 
        onChangeText={setInputValue}>
      </TextInput>
      <Text>Render Count: {count.current}</Text>
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

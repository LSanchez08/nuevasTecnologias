import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { promiseText, wait2Seconds, wait2SecondsAsync } from './importPromise';

export default function App() {
  // const test = 25;

  // const name = 'Luis'
  // const lastName = 'Sánchez'
  // const fullName = `${name} ${lastName}`
  
  // const user = {
  //   address: {
  //     city: 'Conkal',
  //     street: 200
  //   },
  //   name : 'Luis Sánchez',
  //   phone : '9999696024',
  //   age: 21,
  //   coordinates: {
  //     x: '10.29241927',
  //     y: '10.29241927'
  //   }
  // }
  
  // const user2 = {
  //   ...user,
  //   age: 23,
  //   address: {
  //     ...user.address,
  //     street: 300
  //   }
  // };

  const [ test, setTest ] = useState('Loading...');
  const [test2, setTest2] = useState('test');

  const waitPlease = async (showResolve) => {
    try {
      const result = await wait2SecondsAsync(true);

      setTest(result);
    } catch (error) {
      setTest(`Catch: ${error}`)
    }
    setTest2('Execute after promise');
  };

  useEffect(() => {
    // wait2Seconds(true)
    //   .then((response) => setTest(response))
    //   .catch((error) => setTest(`Catch: ${error}`));
    waitPlease(true);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text>{test}</Text>
      <Text>{test2}</Text>
      {/* <Text>El valor del test es: {test}</Text>
      <Text>Objeto: {JSON.stringify(user, null, 2)}</Text>
      <Text>Objeto: {JSON.stringify(user2, null, 2)}</Text> */}
      
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
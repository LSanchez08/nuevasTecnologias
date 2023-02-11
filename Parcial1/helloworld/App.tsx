
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { promiseText, resApi, wait2Seconds, wait2SecondsAsync } from './importPromise';

import { HERO } from './importTypescript';

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

  // const [ test, setTest ] = useState('Loading...');
  // const [test2, setTest2] = useState('test');
  // const [users, setUsers] = useState([]);
  

  // const waitPlease = async (showResolve) => {
  //   try {
  //     const result = await wait2SecondsAsync(true);
  //     const { data: { data } } = await resApi.get('/users');

  //     setUsers(data);
  //     setTest(result);
  //   } catch (error) {
  //     setTest(`Catch: ${error}`)
  //   }
  //   setTest2('Execute after promise');
  // };

  // useEffect(() => {
  //   // wait2Seconds(true)
  //   //   .then((response) => setTest(response))
  //   //   .catch((error) => setTest(`Catch: ${error}`));
  //   waitPlease(true);
  // }, []);

  // let test : string | number = 'hello';
  // test = 5;
  
  // const test : string[] = ['perro', 'gato', 'gallina'];

  // test.push('sheep');
  // test.push('fish');

  const hero : HERO[] = [
    {
      name: 'name',
      company: {
        name: 'DC',
        year: 2000
      },
      hero: 'hero'
    }
  ];

  hero.push({
    hero: 'test',
    name: 'test',
    company: {
      name: 'DC',
      year: 2000
    }
  });

  hero.push({
    hero: 'reee',
    name: 'you',
    company: {
      name: 'DC',
      year: 2000
    }
  });

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {/* <Text>{test}</Text> */}
      <Text>Objeto: {JSON.stringify(hero, null, 2)}</Text>
      {/* <Text>{test2}</Text>
      <Text>{JSON.stringify(users, null, 2)}</Text> */}
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
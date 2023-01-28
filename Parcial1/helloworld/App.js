import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const test = 25;

  const name = 'Luis'
  const lastName = 'Sánchez'
  const fullName = `${name} ${lastName}`
  
  const user = {
    address: {
      city: 'Conkal',
      street: 200
    },
    name : 'Luis Sánchez',
    phone : '9999696024',
    age: 21,
    coordinates: {
      x: '10.29241927',
      y: '10.29241927'
    }
  }
  
  const user2 = {
    ...user,
    age: 23,
    address: {
      ...user.address,
      street: 300
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text>Hola mundo {fullName}</Text>
      <Text>El valor del test es: {test}</Text>
      <Text>Objeto: {JSON.stringify(user, null, 2)}</Text>
      <Text>Objeto: {JSON.stringify(user2, null, 2)}</Text>
      
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
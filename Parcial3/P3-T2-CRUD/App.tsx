import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from './src/database/firebase';

import { users } from './src/constants/users';
import Home from './components/Home';
import Users from './components/users';
import UserForm from './components/userForm';
import CreateUserForm from './components/createUserForm';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="users" component={Users} />
        <Stack.Screen name="user" component={UserForm} />
        <Stack.Screen name="createUser" component={CreateUserForm} />
      </Stack.Navigator>
    </NavigationContainer>
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import useForm from '../hooks/useForm';
import TextField from './TextField';

import { users } from '../src/constants/users';
const { requestManager } = require('../src/database/CRUD');

const fields : Field[] = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'Name'
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Email'
  },
  {
    name: 'phone',
    label: 'Phone',
    placeholder: 'Phone'
  },
  {
    name: 'address',
    label: 'Address',
    placeholder: 'Address'
  },
  {
    name: 'age',
    label: 'Age',
    placeholder: 'Age'
  },
]
export default function UserForm({ navigation, route }: any) {
  const { name, phone, email, address, age, id } = route.params;
  const user : User = { name, phone, email, address, age };
  const { state, onFieldChange } = useForm({ initialState: user });

  const handleButton = async() => {
    try {
      const { message } = await requestManager({ body: {
        id,
        ...state
      }, method: 'PUT'});

      Alert.alert('User Updated', message);
      navigation.navigate("users");
    } catch (error) {
      console.log(error)
    }
  };

  const handleDeleteUser = async () => {
    try {
      const { message } = await requestManager({ body: {
        id,
      }, method: 'DELETE'});

      Alert.alert('User Deleted', message);
      navigation.navigate("users");
    } catch (error) {
      console.log(error)
    }
  };

  const handleDeleteButton = async () => {
    try {
      Alert.alert('Delete user', 'Are you sure you want to delete?', [
        { text: 'Yes', onPress: () => handleDeleteUser()},
        { text: 'No', onPress: () => alert('Action Canceled.')}
      ]);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      {
        fields.map(({ name, label, placeholder }, ix) => (
        <TextField
          key= {ix}
          name={name}
          label={label}
          placeholder={placeholder}
          initialState={state[name]}
          onTextChange={onFieldChange}

        />
        ))
      }
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button 
            title="Update User" 
            onPress={handleButton}
        />
        </View>
        <View style={styles.button}>
          <Button 
            title="Delete User" 
            onPress={handleDeleteButton}
          />
        </View>
        
      </View>

        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginHorizontal: 50
  }
});
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import useForm from '../hooks/useForm';
import TextField from './TextField';

import { defaultData } from '../src/constants/users';
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
];

export default function CreateUserForm({ navigation, route }: any) {
  const { state, onFieldChange } = useForm({ initialState: defaultData });
  
  const handleButton = async() => {
    try {
      const { message } = await requestManager({ body: state, method: 'POST'});

      // alert(message);
      Alert.alert('User Added', message)
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
      <Button 
        title="Submit User" 
        onPress={handleButton}
      />
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
});
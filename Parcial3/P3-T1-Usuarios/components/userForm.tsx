import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import useForm from '../hooks/useForm';
import TextField from './TextField';

import { users } from '../src/constants/users';

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
  const { phone } = route.params;
  const user = users.find((user) => user.phone === phone) as User;
  const { state, onFieldChange } = useForm({ initialState: user });

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
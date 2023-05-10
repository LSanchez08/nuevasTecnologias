import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NavigationScreenProp } from 'react-navigation';
import { useEffect, useState } from 'react';
import { useIsFocused } from "@react-navigation/native";

import { defaultData } from '../src/constants/users';
const { requestManager } = require('../src/database/CRUD');


interface UsersNavigation {
  navigation: NavigationScreenProp<any,any>,
}

export default function Users({navigation}: UsersNavigation) {
  const isFocused = useIsFocused();
  const [users, setUsers] = useState([]);
  const handleGetUsers = async() => {
    try {
      const { response } = await requestManager({ body: defaultData, method: 'GET'});
      
      setUsers(response);
    } catch (error) {
      console.log(error)
      setUsers([]);
    }
  }
  useEffect(() => {
    if(isFocused){ 
      handleGetUsers();
    }
  }, [isFocused]);

  return (
    <View >
      <Text >Users</Text>
      {
        users.map(({ name, phone, email, address, age, id }, ix) => 
          (
            <ListItem
              key={ix}
              title={name}
              leading={<Icon name="phone" size={24} />}
              trailing={props => <Icon name="chevron-right" {...props} />}
              onPress = {() => navigation.navigate("user", { name, phone, email, address, age, id })}
            />
          )
        )
      }
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listItem: {
    fontsize: 24,
    color: 'black'
  }
});
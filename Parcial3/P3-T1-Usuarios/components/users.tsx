import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NavigationScreenProp } from 'react-navigation';

import { users } from '../src/constants/users';

interface UsersNavigation {
  navigation: NavigationScreenProp<any,any>,
}

export default function Users({navigation}: UsersNavigation) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Users</Text>
      {
        users.map(({ name, phone }, ix) => 
          (
            <ListItem
              key={ix}
              title={name}
              leading={<Icon name="phone" size={24} />}
              trailing={props => <Icon name="chevron-right" {...props} />}
              onPress = {() => navigation.navigate("user", {phone})}
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
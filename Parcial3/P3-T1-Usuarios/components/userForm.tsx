import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { users } from '../src/constants/users';

export default function UserForm({ navigation, route }) {
  const { phone } = route.params;
  const user = users.find((user : User) => user.phone === phone);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{user?.name}</Text>
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
});
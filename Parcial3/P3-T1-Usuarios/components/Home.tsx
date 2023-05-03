import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface HomeNavigation {
  navigation: NavigationScreenProp<any,any>,
}

export default function Home({ navigation }: HomeNavigation) {
  return (
    <View style={styles.container}>
      <Button
      title = "Users"
      onPress = {() => navigation.navigate("users")}
      />
      <StatusBar style="auto" />
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
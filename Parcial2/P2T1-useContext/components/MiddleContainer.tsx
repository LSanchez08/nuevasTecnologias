import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { User, UserContext } from '../imports/userContext';

export default function MiddleContainer() {
  const { department, startingDate } = useContext<User>(UserContext);
  const [items, setItems] = useState([
    { key: 'Department:', value: department },
    { key: 'Starting Date:', value: startingDate }
  ])

  return (
    <View style={styles.container}>
      <FlatGrid
        data={items}
        style={styles.gridView}
        staticDimension={300}
        fixed
        spacing={10}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer]}>
            <Text style={styles.itemName}>{item.key}</Text>
            <Text style={styles.itemCode}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: 300
    // justifyContent: 'center',
  },
  sectionTitle: {
    textAlign: 'center'
  },
  gridView: {
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    borderColor: 'black'
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
  },
});

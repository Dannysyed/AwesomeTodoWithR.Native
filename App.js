import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  let [task, setTask] = useState([
    {
      id: 1,
      title: "Buy groceries",
      completed: false
    },
    {
      id: 2,
      title: "Buy groceries",
      completed: false
    }, {
      id: 3,
      title: "Buy groceries",
      completed: false
    },

  ])
  return (
    <View style={styles.root}>
      <View style={{ display: "flex", flexDirection: 'row', gap: 5 }}>
        <TextInput style={{ borderWidth: 1, width: 100, height: 40 }} />
        <Button title='Add a task' />

      </View>
      {task.map(val => {
        return
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: "center",
    borderWidth: 1,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  let [taskItem, setTaskItem] = useState('')
  let [task, setTask] = useState([
    {
      title: "Buy groceries",
    },
    {
      title: "Buy groceries",
    }, {
      title: "Buy groceries",
    },

  ])

  let taskHandler = () => {
    console.log(task)
    setTask(prev => prev.concat({ title: taskItem }))
  }
  return (
    <View style={styles.root}>
      <Text style={{ fontSize: 30, marginTop: 40, fontWeight: "500" }}>Welcome to Todo App</Text>
      <View style={{ display: "flex", flexDirection: 'row', gap: 5 }}>
        <TextInput
          style={{ borderWidth: 1, width: 100, height: 40 }}
          onChangeText={(value) => { setTaskItem(value) }}
        />
        <Button title='Add a task' onPress={taskHandler} />
      </View>
      <View >
        {task.map(val => {
          return <Text>{val.title}</Text>
        })}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    gap: 90,
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

import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Todolist from './components/todolist';



export default function App() {
  const [taskItem, setTaskItem] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries' },
    { id: 2, title: 'Clean the house' },
    { id: 3, title: 'Go for a run' },
  ]);

  const addTask = () => {
    if (taskItem.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, title: taskItem }]);
      setTaskItem('');
    }
  };
  const removeItem = (id) => {

    setTasks(prev => {
      return prev.filter(val => val.id !== id)
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={taskItem}
          onChangeText={(text) => setTaskItem(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <Todolist tasks={tasks} onDelete={removeItem} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },


});

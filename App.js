import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Modal } from 'react-native';
import Todolist from './components/todolist';
import Todoinput from './components/todoinput';
import { StatusBar } from 'expo-status-bar';



export default function App() {
  const [taskItem, setTaskItem] = useState('');
  const [modelVisible, setModalIsVisible] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries' },
    { id: 2, title: 'Clean the house' },
    { id: 3, title: 'Go for a run' },
  ]);

  const addTask = () => {
    modalVisibleHandler()
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

  const modalVisibleHandler = () => {

    setModalIsVisible(prev => !prev);
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <TouchableOpacity style={styles.addButton} onPress={modalVisibleHandler}>
          <Text style={styles.buttonText}>Add task</Text>
        </TouchableOpacity>
        <Todoinput modalVisible={modelVisible} taskItem={taskItem} addTask={addTask} setTaskItem={setTaskItem} modalVisibleHandler={modalVisibleHandler} />
        <Todolist tasks={tasks} onDelete={removeItem} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#520f5e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    color: 'white',
    textAlign: 'center'

  }, addButton: {
    backgroundColor: '#ab5bb5',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

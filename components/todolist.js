import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Todoitem from './todoitem'

const Todolist = ({ tasks }) => {
    return (
        <ScrollView style={styles.taskList}>
            {tasks.map((task) => (
                <Todoitem key={task.id} title={task.title} />

            ))}
        </ScrollView>
    )
}

export default Todolist

const styles = StyleSheet.create({
    taskList: {
        flex: 1,
    },
})
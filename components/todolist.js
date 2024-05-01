import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Todoitem from './todoitem'

const Todolist = ({ tasks, onDelete }) => {
    return (
        <FlatList
            style={styles.taskList}
            data={tasks}
            renderItem={(item) => {
                return <Todoitem key={item.item.id} id={item.item.id} title={item.item.title} onDelete={onDelete} />

            }}
            keyExtractor={(item, index) => {
                return item.id
            }} />

    )
}

export default Todolist

const styles = StyleSheet.create({
    taskList: {
        flex: 1,
    },
})
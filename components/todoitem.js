import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Todoitem = ({ title }) => {
    return (
        <View style={styles.taskItem}>
            <Text style={styles.taskTitle}>{title}</Text>
        </View>
    )
}

export default Todoitem

const styles = StyleSheet.create({
    taskItem: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        marginBottom: 10,
    },
    taskTitle: {
        fontSize: 16,
    },
})
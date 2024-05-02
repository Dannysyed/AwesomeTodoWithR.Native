import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Todoitem = ({ title, onDelete, id }) => {
    return (
        <View style={styles.taskItem}>

            <Pressable android_ripple={{ color: '#ddddd' }} onPress={onDelete.bind(this, id)}>
                <View >
                    <Text style={styles.taskTitle}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Todoitem

const styles = StyleSheet.create({
    taskItem: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#860dab',
        borderRadius: 20,
        marginBottom: 10,
    },
    taskTitle: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center'

    },
})
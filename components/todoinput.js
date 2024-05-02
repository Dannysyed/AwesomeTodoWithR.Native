import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Todoinput = ({ taskItem, addTask, setTaskItem, modalVisibleHandler, modalVisible }) => {
    return (
        <Modal visible={modalVisible} animationType='slide' transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Add Task</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter a task"
                        value={taskItem}
                        onChangeText={(text) => setTaskItem(text)}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.addButton} onPress={addTask}>
                            <Text style={styles.buttonText}>Add</Text>
                        </TouchableOpacity>
                        <Button title='Cancel' onPress={modalVisibleHandler} color={'#ab5bb5'} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Todoinput

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        minWidth: 300,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: '#ab5bb5',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginRight: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});

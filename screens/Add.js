import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import { View, ScrollView, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native'

export default function Add() {
    return (
        <>
            
            <View style={styles.addScreen}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <KeyboardAvoidingView behavior="position">
                        <View style={styles.container}>
                            <Text style={styles.text}>Add Item</Text>
                            <TextInput
                                style={styles.input_field}
                                label="name"
                                mode="outlined"
                            />
                            <TextInput
                                style={styles.input_field}
                                label="year"
                                mode="outlined"
                            />
                            <TextInput
                                style={styles.input_field}
                                label="phone"
                                mode="outlined"
                            />
                            <TextInput
                                style={styles.input_field}
                                label="image"
                                mode="outlined"
                            />
                            <TextInput
                                style={styles.input_field}
                                label="price"
                                mode="outlined"
                            />
                            <TextInput
                                style={styles.input_field}
                                label="desc"
                                mode="outlined"
                            />
                            <Button icon="camera" mode="contained" style={{marginBottom : 5}}>Upload image</Button>
                            <Button mode="contained">Add</Button>
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    addScreen : {
        flex : 1
    },
    container : {
        paddingHorizontal : 15,
        paddingVertical : 15
    },
    text : {
        textAlign : 'center',
        fontSize : 20,
        marginBottom : 15
    },
    input_field : {
        marginBottom : 10
    }

})
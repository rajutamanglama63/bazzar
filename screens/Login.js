import React from 'react'
import { TextInput, Button } from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'

export default function Home() {
    const navigationHandler = useNavigation()
    return (
        <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView behavior="position">
                    <View style={styles.top_box}>
                        <Image style={{width : 200, height: 200}} source={require("../assets/TimroBazzar.png")} />
                        <Text style={styles.text}>Please login to continue.</Text>
                    </View>
                    <View style={styles.bottom_box}>
                        <TextInput label="email" mode="outlined" />
                        <TextInput label="password" mode="outlined" secureTextEntry={true} />
                        <Button mode="contained">Login</Button>
                        <TouchableOpacity onPress={() => navigationHandler.navigate("Sign up")}>
                            <Text style={{textAlign : "center"}}>Not Registered Yet?</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </>
    )
}


const styles = StyleSheet.create({
    top_box : {
        alignItems : 'center'
    },
    text : {
        fontSize : 22,
        marginVertical : 10
    },
    bottom_box : {
        paddingHorizontal : 40,
        // backgroundColor : 'red',
        height : '50%',
        justifyContent : 'space-evenly'
    }
})
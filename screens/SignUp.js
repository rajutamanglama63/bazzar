import React, {useState} from 'react'
import { TextInput, Button } from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import auth from '../Firebase'

export default function SignUp() {
    const navigationHandler = useNavigation()
    const [authenticatedUser, setAuthenticatedUser] = useState({
        displayName : "",
        email : "",
        password : "",
        errorMessage : null
    })

    const signUpHandler = () => {
        try {
            const user = await auth.createUserWithEmailAndPassword(authenticatedUser.email, authenticatedUser.password)
            console.log(user);
        } catch (error) {
            setAuthenticatedUser({...authenticatedUser, errorMessage : error.message})
        }
    }
    return (
        <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView behavior="position">
                    <View style={styles.top_box}>
                        <Image style={{width : 200, height: 200}} source={require("../assets/TimroBazzar.png")} />
                        <Text style={styles.text}>Please SignUp</Text>
                    </View>
                    {authenticatedUser.errorMessage ? (
                        <>
                            <Text style={{color : "red"}}>{errorMessage}</Text>
                        </>
                    ) : null}
                    <View style={styles.bottom_box}>
                        <TextInput 
                         label="display name" 
                         mode="outlined" 
                         value={authenticatedUser.displayName}  
                         onChange={(e) => setAuthenticatedUser({...authenticatedUser, displayName : e.target.value})}
                        />
                        <TextInput 
                         label="email" 
                         mode="outlined" 
                         value={authenticatedUser.email}
                         onChange={(e) => setAuthenticatedUser({...authenticatedUser, email : e.target.value})}
                        />
                        <TextInput 
                         label="password" 
                         mode="outlined" 
                         secureTextEntry={true} 
                         value={authenticatedUser.password}
                         onChange={(e) => setAuthenticatedUser({...authenticatedUser, password : e.target.value})}
                        />
                        <Button mode="contained" onPress={signUpHandler}>SignUp</Button>
                        <TouchableOpacity onPress={() => navigationHandler.navigate("Login")}>
                            <Text style={{textAlign : "center"}}>Already Registered?</Text>
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
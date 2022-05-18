import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import StackNavigator from "./stackNavigator";
import BottomTabNavigator from './bottomTabNavigator'
import auth from "../Firebase";

export default function Navigation() {
    const [authUser, setAuthUser] = useState(false)

    useEffect(() => {
        const unsubcribed = auth.onAuthStateChanged((user) => {
            if(user) {
                setAuthUser(true)
            }else {
                setAuthUser(false)
            }

            return unsubcribed
        })
    }, [])
    
    return (
        <NavigationContainer>
            {authUser ? <BottomTabNavigator /> : <StackNavigator />}
            {/* <StackNavigator /> */}
            {/* <BottomTabNavigator /> */}
        </NavigationContainer>
    )
}

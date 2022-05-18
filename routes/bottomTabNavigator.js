import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { View } from "react-native";
import Advertisement from '../screens/Advertisement'
import Account from "../screens/Account";
import Add from '../screens/Add'

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon : ({color}) => {
                let iconName

                if(route.name === 'Advertisement') {
                    iconName = 'home'
                } else if (route.name === 'Add') {
                    iconName = 'plus-circle'
                } else if (route.name === 'Account') {
                    iconName = 'user'
                }

                return <View ><Feather name={iconName} size={35} color={color} /></View>
            },

            activeTintColor: '#004aad',
            inactiveTintColor: 'gray',
        })}
            // tabBarOptions={{
            //     activeTintColor: '#004aad',
            //     inactiveTintColor: 'gray',
            // }}
        >
            <Tab.Screen name="Advertisement" component={Advertisement} options={{title:"", headerShown : false}} />
            <Tab.Screen name="Add" component={Add} options={{title:"", headerShown : false}} />
            <Tab.Screen name="Account" component={Account} options={{title:""}} />
        </Tab.Navigator>
    )
}

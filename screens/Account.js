import React from 'react'
import { View, Text } from 'react-native'
import { Avatar, Button } from 'react-native-paper'
import auth from '../Firebase'

export default function Account() {
    return (
        <>
            <View style={{padding : '10'}}>
                <Avatar src="" />
                <Text>{auth.currentUser.displayName}.</Text>
                <Text>{auth.currentUser.email}</Text>
                <Button onPress={() => auth.signOut()} />
            </View>
        </>
    )
}

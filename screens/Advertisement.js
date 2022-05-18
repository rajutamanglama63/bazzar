import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import CardComponent from '../components/Card'

export default function Advertisement() {
    const myListItems = [
        {
            name : "Watch",
            year : "2020",
            phone : "2535427",
            image : "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
            price : "155",
            desc : "This watch is awesome guys."
        },
        {
            name : "Glasses",
            year : "2021",
            phone : "568956",
            image : "https://media.istockphoto.com/photos/eyeglasses-isolated-on-white-background-with-clipping-path-picture-id1304136213?b=1&k=20&m=1304136213&s=170667a&w=0&h=-bgkU3YIweB63JV9z-rD0AT2nh-XGhxULv22weDP6v0=",
            price : "165",
            desc : "Classic pairs of glasses are in sale."
        },
    ]
    return (
        <View style={styles.ad_screen}>
            <View style={styles.container}>
                <FlatList
                 data={myListItems}
                 keyExtractor={(item) => item.phone}
                 renderItem={({item}) => <CardComponent item={item} />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ad_screen : {
        flex : 1,
    },
    container : {
        paddingHorizontal : 10
    }
})

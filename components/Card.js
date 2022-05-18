import React from 'react'
import { StyleSheet } from "react-native";
import { Button, Card, Paragraph } from 'react-native-paper';

export default function CardComponent({item}) {
    return (
        <>
            <Card style={styles.card}>
                <Card.Title title={item.name} />
                <Card.Content>
                    <Paragraph>{item.desc}</Paragraph>
                    <Paragraph>{item.year}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: item.image }} />
                <Card.Actions>
                    <Button style={{marginRight : 5}} mode='outlined'>{item.price}</Button>
                    <Button mode='outlined'>Call Seller</Button>
                </Card.Actions>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    card : {
        margin : 10,
        elevation : 2
    }
})

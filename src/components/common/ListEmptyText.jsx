import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const ListEmptyText = ({title}) => {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    text:{
        color:"black",
        fontWeight:"800",
        fontSize:20,
        textAlign:"center",
        padding:20
    }
})
export default ListEmptyText
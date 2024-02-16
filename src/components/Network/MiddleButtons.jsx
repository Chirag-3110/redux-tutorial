import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const {width}=Dimensions.get("window");
const MiddleButtons = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textDot}>
                <Text style={[styles.basicText,{fontWeight:"700",marginRight: 10,}]}>Near Me</Text>
                <View style={styles.greenDot} />
            </View>
            <Text style={[styles.basicText,{fontWeight:"600"}]}>Treanding</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        width,
        alignItems:"center",
        justifyContent: 'space-around',
        flexDirection:"row",
        padding:15
    },
    categotyContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent: 'space-around',
    },
    basicText:{
        color:"black",
        fontSize:16,
        lineHeight:16
    },
    greenDot:{
        backgroundColor:"#146655",
        width:8,
        height:8,
        borderRadius:4
    },
    textDot:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }
})
export default MiddleButtons
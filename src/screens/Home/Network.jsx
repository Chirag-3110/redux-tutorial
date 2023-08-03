import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Networkcategory from '../../components/Network/Networkcategory';
import MiddleButtons from '../../components/Network/MiddleButtons';
import UserCard from '../../components/Network/UserCard';
import NewUserList from '../../components/Network/NewUserList';

const {width}=Dimensions.get("window");
const Network = () => {
    return (
        <ScrollView style={styles.container}>
            <Networkcategory/>
            <MiddleButtons/>
            <NewUserList/>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    },
    cardBody:{
        width:width-40,
        backgroundColor:"white",
        alignSelf:"center",
        elevation:10,
        marginVertical: 15,
        borderRadius:10
    },
    cardButton:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        height:50,
        width:"100%"
    },
    buttonText:{
        marginHorizontal:10,
        fontSize:14,
        lineHeight:14,
        fontWeight:"500"
    },
    textColor:{
        color:"rgba(51, 51, 51, 1)",
    }
})
export default Network
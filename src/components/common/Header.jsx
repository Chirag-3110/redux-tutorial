import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

import Notification from '../../assets/Icon/noti.svg' 
const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Shaer</Text>
            <View style={styles.icons}>
                <View style={{marginRight: 20,}}>
                    <Notification width={20} height={20} />
                </View>
                <Image
                    style={{width:32,height:32,resizeMode:"contain"}}
                    source={require('../../assets/images/profil.png')}
                />
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        backgroundColor:"rgba(20, 20, 20, 1)",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        paddingVertical:15
    },
    icons:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    headerText:{
        fontWeight:"900",
        fontSize:32,
        color:"#F8F9FE"
    }
  })
export default Header
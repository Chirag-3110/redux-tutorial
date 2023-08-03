import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import { Categoty } from '../../data/Netowrk/TopCategory';
const {width}=Dimensions.get("window");

const Networkcategory = () => {
    return (
        <View style={styles.categotyContainer}>
            {
                Categoty.map((item,index)=>(
                    <ImageBackground blurRadius={5} borderRadius={10} source={{uri:item.path}} style={styles.cardBody}>
                        <Text style={styles.cardText}>{item.title}</Text>
                    </ImageBackground>
                ))
            }
        </View>
    )
}
const styles=StyleSheet.create({
    categotyContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent: 'space-around',
    },
    cardBody:{
        width:width/2.3,
        height:100,
        margin: 5,
        alignItems:"center",
        justifyContent:"center",
    },
    cardText:{
        fontWeight:"700",
        color:"white",
        fontSize:16,
        textAlign:"center"
    }
})
export default Networkcategory
import { View, Text, StyleSheet, ImageBackground, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'

import Eye from '../../assets/Icon/eye.svg'
import Heart from '../../assets/Icon/heart.svg'
import Chat from '../../assets/Icon/chat.svg'

import ImageSize from 'react-native-image-size';

const UserExploreCard = ({item}) => {
    
    let [dynamicDimensions,setDimensions]=useState(1);
    useEffect(()=>{
        const getAspectRatioFromURL = async (url) => {
            try {
              const size = await ImageSize.getSize(url);
              let dim=size.width/size.height;
              setDimensions(dim);
            } catch (error) {
              console.error('Error retrieving image size:', error);
            }
        };
        getAspectRatioFromURL(item.url)
    },[])
    return (
        <View resizeMode="cover" style={styles.cardBody}>
            <ImageBackground
                borderRadius={10}
                imageStyle={{resizeMode:"center"}}
                style={{
                    aspectRatio:dynamicDimensions,
                }}
                source={{uri:item.url}} 
            >   
                <Text style={{color:"white",position:"absolute",bottom:10,fontSize:12,fontWeight:"500",padding:7,paddingHorizontal:8}}>
                    {item.title}
                </Text>
            </ImageBackground>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:10}}>
                <Eye width={20} height={20} />
                <Heart width={20} height={20} />
                <Chat width={20} height={20} />
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    cardBody:{
        // width:width/2,
        // padding:10,
        marginVertical:5
    }
})
export default UserExploreCard
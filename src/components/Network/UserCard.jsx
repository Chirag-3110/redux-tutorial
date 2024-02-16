import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import Instagram from '../../assets/Icon/insta.svg'
import Youtube from '../../assets/Icon/youtube.svg'
import UserAdd from '../../assets/Icon/useradd.svg'
import NotRequest from '../../assets/Icon/notrequest.svg'

const {width}=Dimensions.get("window");
const UserCard = ({name,distnce,about,bgimage,profile,insta,youtube,requested}) => {
    return (
        <View style={styles.cardBody}>
            <Image
                style={{width:'100%',height:100,borderTopRightRadius:10,borderTopLeftRadius:10}}
                source={bgimage}                
            />
            <View style={{flexDirection:"row",alignItems:"flex-end",justifyContent:"space-around",marginTop:-50}}> 
                <Image
                    style={{width:100,height:100,resizeMode:"contain"}}
                    source={profile}                
                />
                <View style={{flexDirection: 'row',justifyContent:"center",alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",margin:5,}}>
                        <Instagram width={20} height={20} />
                        <Text style={{color:"rgba(88, 88, 88, 1)",fontSize:16,fontWeight:"600",marginVertical:10,marginLeft:10,}}>
                            {insta}
                        </Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",margin:5}}>
                        <Youtube width={20} height={20} />
                        <Text style={{color:"rgba(88, 88, 88, 1)",fontSize:16,fontWeight:"600",marginVertical:10,marginLeft:10,}}>
                            {youtube}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{padding:15}}>
                <Text style={[styles.textColor,{fontSize:16,fontWeight:"600"}]}>
                    {name} . <Text style={[styles.textColor,{fontSize:14,fontWeight:"400"}]}>Within {distnce}</Text>
                </Text>
                <Text style={{color:"rgba(88, 88, 88, 1)",fontSize:12,fontWeight:"500",marginVertical:10}}>Designer, Artist +2</Text>
                <Text style={{color:"rgba(88, 88, 88, 1)",fontSize:12,fontWeight:"500"}}>{about}</Text>
            </View>
            <TouchableOpacity style={styles.cardButton}>
                {
                    requested?<UserAdd  width={20} height={20} />:<NotRequest width={20} height={20} />
                }
                <Text style={[styles.buttonText,styles.textColor]}>
                    {requested?"Request Sent":"Add to Circle"}
                </Text>
            </TouchableOpacity>
        </View>
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
        // elevation:10,
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
export default UserCard
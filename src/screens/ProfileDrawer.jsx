import { View, Text, Dimensions, Animated, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React,{Children, forwardRef,useEffect,useImperativeHandle} from 'react'
const {width,height}=Dimensions.get("window");
const ProfileDrawer = forwardRef((props, ref) => {
    const animated = new Animated.Value(0);
    useImperativeHandle(ref, () => ({
        openDrawer() {
            Animated.timing(animated, {
                toValue: -(2*width)/3.5,
                duration: 1000,
                useNativeDriver: true,
            }).start();
        },
        closeDrawer(){
            Animated.timing(animated, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    }));
    const closeDrawer=()=>{
        Animated.timing(animated, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }
    return (
        <Animated.View style={[{transform: [{translateX: animated}]},styles.animtedView]}>
            <View style={styles.innerView}>
                <View style={{height:200,alignItems:"center",justifyContent:"space-evenly",width:"100%"}}>
                    <Image
                        source={require('../assets/images/profil.png')}
                        style={{width:60,height:60,borderRadius:30}}
                    />
                    <Text style={{color:"rgba(51, 51, 51, 1)",fontSize:16,fontWeight:"600"}}>
                        Rohit Singh
                    </Text>
                    <Text style={{color:"rgba(51, 51, 51, 1)",fontSize:14,fontWeight:"400"}}>
                        Profile 28% Complete
                    </Text>
                    <TouchableOpacity style={styles.buttonBody}>
                        <Text style={styles.buttonText}>View Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:130,justifyContent:"space-evenly",width:"80%"}}>
                    <Text style={{color:"rgba(51, 51, 51, 1)",fontSize:14,fontWeight:"500"}}>
                        Sent Requests
                    </Text>
                    <View>
                        <Text style={{color:"rgba(51, 51, 51, 1)",fontSize:14,fontWeight:"500"}}>
                            Moodboard Usage
                        </Text>
                        <Text style={{color:"rgba(51, 51, 51, 1)",fontSize:12,fontWeight:"400",marginVertical:10}}>
                            2.5 of 5 G.B used
                        </Text>
                        <View style={{width:'100%',height:4,backgroundColor:"rgba(170, 170, 170, 1)"}}>
                            <View style={{height:"100%",width:"60%",backgroundColor:"red"}} />
                        </View>
                    </View>
                </View>
                <View style={{height:180,alignItems:"center",justifyContent:"space-evenly",width:"80%"}}>
                    <Text style={{color:"rgba(51, 51, 51, 1)",fontSize:14,fontWeight:"500",width:"100%"}}>
                        Upgrade
                    </Text>
                    <Text style={{color:"rgba(51, 51, 51, 1)",fontSize:12,fontWeight:"400",width:"100%",marginTop:-10}}>
                        Store more data & Get other benefits with Shaer Pro
                    </Text>
                    <TouchableOpacity style={[styles.buttonBody,{backgroundColor:"red",borderWidth:0}]}>
                        <Text style={{color:"white",fontWeight:"900",fontSize:14}}>Get Shaer  Pro</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>
    )
})

const styles=StyleSheet.create({
    animtedView: {
        backgroundColor: "transparent",
        height,
        width:width,
        alignItems: "flex-start",
        position:"absolute",
        right:-width,
    },
    innerView:{
        backgroundColor:"white",
        height,
        width:(2*width)/3.5,
        alignItems:"center"
    },
    buttonBody:{
        backgroundColor:"transparent",
        height:50,
        width:135,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:100,
        borderWidth:1,
        borderColor:"rgba(170, 170, 170, 1)"
    },
    buttonText:{
        color:"rgba(51, 51, 51, 1)",
        fontWeight:"500",
        fontSize:12,
        alignSelf:"center"
    }
})
export default ProfileDrawer
import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import auth from '@react-native-firebase/auth';

const {width,height}=Dimensions.get('window');
const Login = ({navigation}) => {

    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [loading,setLoading]=useState(false);

    const userLogin=()=>{
        auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            navigation.navigate("ImageAdd")
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
      <View style={styles.continer}>
        <Text style={{fontWeight:"bold",color:"black",fontSize:50}}> Login </Text>
        <TextInput 
            style={styles.textBox}
            placeholder="Email"
            placeholderTextColor={"black"}
            onChangeText={mail=>setEmail(mail)}
        />
        <TextInput 
            style={styles.textBox}
            placeholder="Password"
            placeholderTextColor={"black"}
            onChangeText={password=>setPassword(password)}
        />
        <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:"transparent",borderWidth:2,borderColor:"#A663FC"}]} 
            onPress={userLogin}
        >
            <Text style={{fontWeight:"bold",fontSize:15,color:"#A663FC"}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:"transparent",borderWidth:2,borderColor:"#A663FC"}]} 
            onPress={()=>navigation.navigate("Signup")}
        >
            <Text style={{fontWeight:"bold",fontSize:15,color:"#A663FC"}}>New Account</Text>
        </TouchableOpacity>
      </View>
    )
}
const styles=StyleSheet.create({
    continer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBox:{
        backgroundColor:"#DFDFDF",
        height:50,
        width:width-40,
        borderRadius:5,
        paddingHorizontal:10,
        marginTop:10,
        color:"black"
    },
    buttonContainer:{
        height:50,
        width:width-40,
        borderRadius:5,
        backgroundColor:"#A663FC",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
    }
})

export default Login
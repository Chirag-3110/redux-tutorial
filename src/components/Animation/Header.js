import React,{useEffect,useRef,useState} from 'react';
import {
  Animated,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Header = () => {
    const scrollY =useRef(new Animated.Value(0)).current;
  
    // Define the animation for hiding the top part of the header
    const headerTranslateY = scrollY.interpolate({
      inputRange: [0, 100], // Adjust the range as per your requirements
      outputRange: [0, -100], // Adjust the output value as per your requirements
      extrapolate: 'clamp',
    });
  
    return (
      <View>
        <Animated.View style={{ transform: [{ translateY: headerTranslateY }] }}>
        <TouchableOpacity style={styles.button}>
                  <Text style={{color:"white"}}>Close</Text>
              </TouchableOpacity>
        </Animated.View>
        
        <TouchableOpacity style={styles.button}>
                  <Text style={{color:"white"}}>Close</Text>
              </TouchableOpacity>
      </View>
    );
};
const styles=StyleSheet.create({
  button:{
    backgroundColor:"#A663FC",
    padding:10,
    margin:5,
    width:120,
    alignItems:"center",
    justifyContent: 'center',
    marginTop:100
  },
})
export default Header
import React,{useEffect,useRef,useState} from 'react';
import {
  Animated,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


import Mail from '../../assets/Icon/mail.svg'
import Search from '../../assets/Icon/search.svg'
import Option from '../../assets/Icon/option.svg'
import Save from '../../assets/Icon/save.svg'

function AnimatedHeadre() {
    const  dummyData=[
      'fdsfe','fsdf','sfvfdsgv','fsgvfgev',
      'fdsfe','fsdf','sfvfdsgv','fsgvfgev',
      'fdsfe','fsdf','sfvfdsgv','fsgvfgev',
    ];

    let AnimatedHeader=useRef(new Animated.Value(0)).current;
    const HEADER_MAX_HEIGHT=150;
    const HEADER_MIN_HEIGHT=60;

    const animtedheiht=AnimatedHeader.interpolate({
      inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
      outputRange:[HEADER_MAX_HEIGHT,HEADER_MIN_HEIGHT],
      extrapolate:"clamp"
    });
    return(
      <View style={styles.container}>
        <Animated.View 
        style={[
          styles.header,
          {
            height:animtedheiht,
            backgroundColor:'red'
          }
        ]}
        >
         <View style={styles.bottomTab}>
            <Mail width={20} height={20} />
            <Search width={20} height={20} />
            <Option width={20} height={20} />
            <Save width={20} height={20} />
        </View>
          <TextInput
            style={{
              width:'90%',height:40,backgroundColor:"white",borderRadius:4,marginBottom:10
            }}
            placeholder='Search'
            placeholderTextColor={"black"}
          />
        </Animated.View>

        <ScrollView
          scrollEventThrottle={16}
          onScroll={({ nativeEvent }) => {
            AnimatedHeader.setValue(nativeEvent.contentOffset.y);
        }} 
        >
          <View style={{backgroundColor:"yellow",marginTop:150}}>
            {
              dummyData.map((ite)=>(
                <Text style={{color:"black",height:50,textAlign:"center",marginVertical:20}}>
                  {ite}
                </Text>
              ))
            }
          </View>
        </ScrollView>
      </View>
    )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  header:{
    justifyContent:"flex-end",
    alignItems:"center",
    left:0,
    right:0,
    backgroundColor:"redAnimatedHeader",
    position:'absolute',
    zIndex:1000
  },
  bottomTab:{
    flexDirection: 'row',
    justifyContent:"space-evenly",
    paddingVertical:20,
    width:"100%"
}
})

export default AnimatedHeadre;

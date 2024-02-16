// import React,{useEffect,useRef,useState} from 'react';
// import {
//   Animated,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Network from './src/screens/Home/Network';
// import Explore from './src/screens/Home/Explore';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFethcingUserStart } from './src/redux/actions/users/userAction';
// import Loading from './src/components/common/Loading';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './src/screens/Auth/Login';
// import Signup from './src/screens/Auth/Signup';
// import CropImage from './src/screens/Home/ImageAdd';

// import auth from '@react-native-firebase/auth';
// import PdfViewer from './src/screens/Home/PdfViewer';
// import ProfileDrawer from './src/screens/ProfileDrawer';
// import Header from './src/components/Animation/Header';


// import Mail from './src/assets/Icon/mail.svg'
// import Search from './src/assets/Icon/search.svg'
// import Option from './src/assets/Icon/option.svg'
// import Save from './src/assets/Icon/save.svg'
// import AnimatedHeadre from './src/screens/Home/AnimatedHeader';
// const Tab = createNativeStackNavigator();


// function App() {
//     return(
//       <View style={styles.container}>
//           <CropImage/>
//       </View>
//     )
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:'white'
//   },
//   header:{
//     justifyContent:"flex-end",
//     alignItems:"center",
//     left:0,
//     right:0,
//     backgroundColor:"redAnimatedHeader",
//     position:'absolute',
//     zIndex:1000
//   },
//   bottomTab:{
//     flexDirection: 'row',
//     justifyContent:"space-evenly",
//     paddingVertical:20,
//     width:"100%"
// }
// })

// export default App;


import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  Linking,
  ScrollView
} from 'react-native';

import {PhonePe, Constants} from 'phonepesdk'
import { NavigationContainer } from '@react-navigation/native';
import MainHome from './src/screens/RepeatScreens/MainHome';
import NewContenr from './src/screens/RepeatScreens/NewContenr';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App=()=>{
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={MainHome} />
        <Stack.Screen name="New" component={NewContenr} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;

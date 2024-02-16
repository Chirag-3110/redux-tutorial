import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MainHome = () => {
    const navigation=useNavigation();
    return (
        <View>
        <Text style={{color:"black"}}>MainHome</Text>
        <Button title='Open Content' onPress={()=>navigation.push("New",{title:"HEllo"})}/>
        </View>
    )
}

export default MainHome
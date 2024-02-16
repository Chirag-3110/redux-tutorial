import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const NewContenr = () => {
    const route=useRoute();
    const navigation=useNavigation();
    const {title}=route.params
    return (
        <View>
        <Text style={{color:"black"}}>{title}</Text>
        <Button title='Open Content' onPress={()=>navigation.push("New",{title:Math.random()*100})}/>
        </View>
    )
}

export default NewContenr
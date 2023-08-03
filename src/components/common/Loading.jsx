import { View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
    return (
        <View style={{flex:1,alignItems: 'center',justifyContent:"center",backgroundColor:"white"}}>
            <ActivityIndicator size={40} color={"blue"} />
        </View>
    )
}

export default Loading
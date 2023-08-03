import { View, Text } from 'react-native'
import React from 'react'
import { NewUsers } from '../../data/Netowrk/NewUsers'
import UserCard from './UserCard'

const NewUserList = () => {
    return (
        <View>
            {
                NewUsers.map((item,index)=>(
                    <UserCard
                        key={index}
                        name={item.name}
                        distance={item.distance}
                        about={item.about}
                        bgimage={item.bgImage}
                        profile={item.profile}
                        insta={item.insta}
                        youtube={item.youtube}
                        requested={item.requested}
                    />
                ))
            }
        </View>
    )
}

export default NewUserList
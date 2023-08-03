import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import UserExploreCard from '../../components/Explore/UserExploreCard';

const width = Dimensions.get("window").width / 2;

const MasonryList = ({users}) => {
    return (
          <ScrollView style={{alignSelf:"center",marginTop:20}}>
              <View style={{flexDirection:'row',justifyContent:"space-between",}}>
                  <View style={{width:"45%"}}> 
                    { 
                      users.filter((_, i) => i % 2 === 0).map(item => (
                          <UserExploreCard item={item}/>
                      ))
                    }
                  </View>
                  <View style={{width:"45%"}} >
                    {
                      users.filter((_, i) => i % 2 !== 0).map(item => (
                          <UserExploreCard item={item} />
                      ))
                    }
                  </View>
              </View>
          </ScrollView>
    )
}

export default MasonryList
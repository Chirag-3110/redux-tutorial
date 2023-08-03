import { View, Text } from 'react-native'
import React from 'react'

import MasonryList from '@react-native-seoul/masonry-list';
import UserExploreCard from '../../components/Explore/UserExploreCard';

const MasonryScreen = () => {
    return (
        <View>
            <MasonryList
                style={{alignSelf: 'stretch'}}
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    alignSelf: 'stretch',
                }}
                numColumns={2}
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <UserExploreCard item={item} index={index} />
                    );
                }}
            />
        </View>
    )
}

export default MasonryScreen
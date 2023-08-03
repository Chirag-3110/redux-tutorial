import { View, Text, StyleSheet, ImageBackground, Dimensions, FlatList, ScrollView, Button } from 'react-native'
import React,{useEffect,useState} from 'react'
import UserExploreCard from '../../components/Explore/UserExploreCard';
import Mail from '../../assets/Icon/mail.svg'
import Search from '../../assets/Icon/search.svg'
import Option from '../../assets/Icon/option.svg'
import Save from '../../assets/Icon/save.svg'
import {  useSelector } from 'react-redux';
import ListEmptyText from '../../components/common/ListEmptyText';

import ImageSize from 'react-native-image-size';
import storage from '@react-native-firebase/storage';

const {width}=Dimensions.get("window");

import MasonryList from './MasonryList';

const Explore = () => {

    const userList=useSelector(state=>state.user);
    const [galleryPhoto, setGalleryPhoto] = useState("https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg");
    const [fileName, setfileName] = useState(`file${Math.random()*100}`);

    const [users,setUsers]=useState([
        {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
          },
          {
            albumId: 1,
            id: 2,
            title: "reprehenderit est deserunt velit ipsam",
            url: "https://ds-prod.citroen.in/static-assets/ds-static/s3fs-public/2023-04/1_mobile__.jpg?v5XyoHqW0vYdle1aYHEW6IvjQR89GoZl",
            thumbnailUrl:"https://via.placeholder.com/150/771796"
          },
          {
            albumId: 1,
            id: 3,
            title: "officia porro iure quia iusto qui ipsa ut modi",
            url: "https://via.placeholder.com/600/24f355",
            thumbnailUrl: "https://via.placeholder.com/150/24f355"
          },
          {
            albumId: 1,
            id: 4,
            title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            url: "https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg",
            thumbnailUrl: "https://via.placeholder.com/150/d32776"
          },
          {
            albumId: 1,
            id: 5,
            title: "natus nisi omnis corporis facere molestiae rerum in",
            url: "https://via.placeholder.com/600/f66b97",
            thumbnailUrl: "https://via.placeholder.com/150/f66b97"
          },
          {
            albumId: 1,
            id: 6,
            title: "accusamus ea aliquid et amet sequi nemo",
            url: "https://via.placeholder.com/600/56a8c2",
            thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
          },
          {
            albumId: 1,
            id: 7,
            title: 'officia delectus consequatur vero aut veniam explicabo molestias',
            url: 'https://ds-prod.citroen.in/static-assets/ds-static/s3fs-public/2023-04/1_mobile__.jpg?v5XyoHqW0vYdle1aYHEW6IvjQR89GoZl',
            thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc'
          },
          {
            albumId: 1,
            id: 8,
            title: 'aut porro officiis laborum odit ea laudantium corporis',
            url: 'https://via.placeholder.com/600/54176f',
            thumbnailUrl: 'https://via.placeholder.com/150/54176f'
          },
          {
            albumId: 1,
            id: 9,
            title: 'qui eius qui autem sed',
            url:'https://via.placeholder.com/600/51aa97',
            thumbnailUrl: 'https://via.placeholder.com/150/51aa97'
          },
          {
            albumId: 1,
            id: 10,
            title: 'beatae et provident et ut vel',
            url: 'https://ds-prod.citroen.in/static-assets/ds-static/s3fs-public/2023-04/1_mobile__.jpg?v5XyoHqW0vYdle1aYHEW6IvjQR89GoZl',
            thumbnailUrl: 'https://via.placeholder.com/150/810b14'
          },
    ]);
    useEffect(()=>{
        // setUsers(userList.users);
    },[])
    
    const uploadFile=async()=>{
      try {
        const reference = await storage().ref(`/file/${fileName}`).putFile(`${galleryPhoto}`)
        const url = await storage().ref(`/file/${fileName}`).getDownloadURL();
        console.log(url);
      } catch (error) {
        console.log(error);
      }
    }
    return (
        <View style={styles.container}>
            {/* <FlatList
                showsHorizontalScrollIndicator={false}
                data={users}
                renderItem={({ item, index }) => {
                    return (
                        <UserExploreCard item={item} index={index} />
                    );
                }}
                keyExtractor={item=>item.id}
                numColumns={2}
                ListEmptyComponent={<ListEmptyText title={List is Empty"} />}
            /> */}
            <MasonryList users={users} />
            <Button
              title='Upload'
              onPress={uploadFile}
            />
            <View style={styles.bottomTab}>
                <Mail width={20} height={20} />
                <Search width={20} height={20} />
                <Option width={20} height={20} />
                <Save width={20} height={20} />
            </View>

        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    cardList:{
        flexDirection:"row",
        flexWrap:"wrap"
    },
    bottomTab:{
        flexDirection: 'row',
        justifyContent:"space-evenly",
        paddingVertical:20
    }
})
export default Explore
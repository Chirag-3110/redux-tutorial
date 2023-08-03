import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    PermissionsAndroid,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,

} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
const {width,height}=Dimensions.get("window");
import auth from '@react-native-firebase/auth';
import RNFetchBlob from 'rn-fetch-blob'
import { useNavigation } from '@react-navigation/native';
import { S3 } from 'aws-sdk';
// import fs from 'react-native-fs';
import {decode} from 'base64-arraybuffer';

const CropImage=()=>{

    // const navigation=useNavigation();

    const [imagePath,setImagePath]=useState('')
    const [storagePermission,setStoragePermission]=useState(false);
    const [imageObject,setImageObject]=useState(null)
    const [imageDimension,setImageDimensions]=useState([]);
    let image_URL = 'https://www.orimi.com/pdf-test.pdf';

    
    const [current,setCurrent]=useState();

    useEffect(()=>{
        // getUser()
    },[])
    const getUser=async()=>{
        let user=auth().currentUser;
        setCurrent(user.uid);
    }
    const selectImageForCrop=()=>{
        ImagePicker.openPicker({
            width: width,
            height: height,
            // multiple:true
        }).then(image => {
            const platformType=Platform.OS==='ios'?image.sourceURL:image.path;
            setImageObject(platformType);
            setImagePath(image);
            setImageDimensions([image.width,image.height])
        })
        .catch((e)=>{
            setImageDimensions([])
            setImageObject(null);
        })
    }

    const saveImageToCloud=async()=>{
        if(imageObject===null){
            alert("Please select Image")
            return;
        }
        const fileName=imageObject.split('/');
        const filePath=fileName[fileName.length-1];
        try {
            const reference = await storage().ref(`/${current}/${filePath}`).putFile(imageObject)
            const url = await storage().ref(`/${current}/${filePath}`).getDownloadURL();
            console.log(url);
        } catch (error) {
            console.log(error);
        }
    }

    const getAllImages=()=>{
        const folderRef = storage().ref(`${current}/imageThumbnail`);
        folderRef
        .listAll()
        .then((res) => {
            const promises = res.items.map((itemRef) => itemRef.getDownloadURL());
            return Promise.all(promises);
        })
        .then((downloadUrls) => {
            console.log(downloadUrls)
        })
        .catch((error) => {
            console.log('Error getting images from Firebase Storage:', error);
        });
    }


    const saveToAws=async()=>{
        const fileName=imageObject.split('/');
        const filePath=fileName[fileName.length-1];
        try {
            const s3 = new S3({
              region: 'ap-south-1',
              accessKeyId: "AKIAUZCZTK6VDMSJPKOB",
              secretAccessKey: "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",
            });
    
            const fileContent = await fetch(imageObject);
            const fileBody = await fileContent.blob();

            const params = {
                Bucket:  'shaer-moodboard-stage',
                Key: filePath,
                Body: fileBody,
                ContentType: imagePath.mime,
            };

            const response = await s3.putObject(params).promise();
            console.log('Upload successful:', response);
            const downloaadParams = {
                Bucket: 'shaer-moodboard-stage',
                Key: filePath,
                Expires: 3600
            };
          
            const download = await s3.getSignedUrl('getObject', downloaadParams);
            console.log('FIle Url:', download);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }
    const downloadPdf = () => {
        let date = new Date();
        let extension = getExtention(image_URL);
        const {config, fs} = RNFetchBlob;
        let downloadDir = fs.dirs.DownloadDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path:downloadDir + '/Shaer' + Math.floor(date.getTime() + date.getSeconds() / 2) + "." + extension,
                description: 'Pdf',
            },
        };
        config(options)
        .fetch('GET', image_URL)
        .then(res => {
            // navigation.navigate("PdfViewer",{fileUrl:res.data})
        });
    };

    const getExtention = (filename) => {
        return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
    };
    return(
        <View style={styles.container}>
            {
                imageObject===null?null:
                <Image
                    style={
                        {width,height:'80%',resizeMode:"contain"}
                    }
                    source={{uri:imageObject}}
                />
            }
            <View style={{width:'100%',flexDirection:"row",justifyContent: 'space-around'}}>
                <TouchableOpacity onPress={saveToAws} style={styles.button}>
                    <Text style={{color:"white"}}>Save Doc</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={selectImageForCrop} style={styles.button}>
                    <Text style={{color:"white"}}>Open Gallery</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cropView:{
        width:'95%',
        height:50
    },
    button:{
        backgroundColor:"#A663FC",
        padding:10,
        margin:5,
        width:120,
        alignItems:"center",
        justifyContent: 'center',
    },
    container_1: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
})

export default CropImage
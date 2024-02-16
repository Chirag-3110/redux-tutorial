import { View, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

import Pdf from 'react-native-pdf';
import { useRoute } from '@react-navigation/native';

const PdfViewer = () => {
    const route=useRoute();
    const {fileUrl} =route.params
    return (
        <View style={styles.container_1}>
            <Pdf
                trustAllCerts={false}
                source={{uri:fileUrl}}
                style={styles.pdf}
            />
        </View>
    )
}
const styles=StyleSheet.create({
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
export default PdfViewer
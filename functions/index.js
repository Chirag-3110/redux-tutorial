const functions = require("firebase-functions");
const admin = require("firebase-admin");

const { Storage } = require('@google-cloud/storage');
const path = require('path');
const os = require('os');
const fs = require('fs');
const sharp = require('sharp');

const regionalFunctions = functions.region('asia-south1');

exports.generateThumbnail = regionalFunctions.storage.object().onFinalize(async (object) => {
    try {
        const filePath = object.name;
        const fileName = path.basename(filePath);
        const fileBucket = object.bucket;
        
        const uid = object.metadata.uid;

        const fileSplitName = filePath.split('/').pop();
    
        if (!object.contentType.startsWith('image/')) {
            console.log('This is not an image.');
            return null;
        }
        
        if (fileSplitName.startsWith('thumb_')) {
            console.log('Already a thumbnail.');
            return null;
        }

          
        const tempFilePath = path.join(os.tmpdir(), fileName);
        const tempThumbnailPath = path.join(os.tmpdir(), 'thumb_' + fileName);
    
        const storage = new Storage();
        const bucket = storage.bucket(fileBucket);
    
        await bucket.file(filePath).download({ destination: tempFilePath });
    
        await sharp(tempFilePath)
        .resize(200, 200)
        .toFile(tempThumbnailPath);
    
        await bucket.upload(tempThumbnailPath, {
        destination: path.join(path.dirname(filePath), uid, 'thumb_' + fileName),
        metadata: {
            contentType: 'image/jpeg',
        },
        });    
        fs.unlinkSync(tempFilePath);
        fs.unlinkSync(tempThumbnailPath);
    
        return;
    } catch (error) {
        return null
    }
}); 
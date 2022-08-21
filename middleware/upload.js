const path = require("path");
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

AWS.config.loadFromPath(__dirname + '/../config/s3.json');



require("dotenv").config();


//s3 버킷 설정
// aws.config.update({
//     accessKeyId: process.env.AWSAccessKeyId,
//     secretAccessKey: process.env.AWSSecretKey,
//     region: 'ap-northeast-2',
// })

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_KEY,   // user 만들면서 지급받은 키값
    secretAccessKey: process.env.AWS_PRIVATE_KEY,
    region: 'ap-northeast-2'
  })
const multerVideo = multer({
    storage: multerS3({
      s3: s3,
      acl: 'public-read',
      bucket: 'azoong/video'
    })
  })

const upload = multer({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: 'azoong',
        key(req, file, cb){
            cb(null, 'original/${Date.now()}${path.basename(file.originalname)}');
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 }
})






// const storage = multerS3({
//     s3: S3,
//     bucket: BUCKET_NAME,
//     key(req, file, cb) {
//         if (file.fieldname === 'videoFile')
//             cb(null, `videos/${Date.now()}${path.basename(file.originalname)}`);
//         if (file.fieldname === 'imageFile')
//             cb(null, `images/${Date.now()}${path.basename(file.originalname)}`);
//     },
// });
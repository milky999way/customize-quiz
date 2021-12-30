const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const moment = require('moment');

// https://aws.amazon.com/ko/sdk-for-node-js/
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html
aws.config.update({region: 'ap-northeast-2'});
s3 = new aws.S3({apiVersion: '2006-03-01'});

const storage = multerS3({
  s3: s3,
  bucket: 'xxx-static-web', // s3 생성시 버킷명
  acl: 'public-read',   // 업로드 된 데이터를 URL로 읽을 때 설정하는 값입니다. 업로드만 한다면 필요없습니다.
  // contentType: multerS3.AUTO_CONTENT_TYPE,
  contentType: function (req, file, cb) {
    cb(null, 'image/svg+xml');
  },
  metadata: function (req, file, cb) {
    cb(null, {fieldName: file.fieldname}); // 파일 메타정보를 저장합니다.
  },
  key: function (req, file, cb) {
    console.log("S3: 그림(svg)파일 저장...");
    cb(null, "static.xxx.com/rc-quiz/uploads/" + moment().format('YYYYMMDDHHmmss') + "_" + decodeURIComponent(file.originalname)) // key... 저장될 파일명과 같이 해봅니다.
  }
});

const upload = multer({ storage: storage }).single("file");

module.exports = upload;
const express = require('express');
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();
const server = express();

const aws = require('aws-sdk');
const upload = require('./fileupload');
const multer = require('multer');
const moment = require('moment');
const config = require('./config');



app.prepare().then(() => {
  server.disable('x-powered-by');
  server.use(bodyParser.urlencoded({extended:false}));
  server.use(bodyParser.json());
  server.use('/quiz/_next/static', express.static(path.join(__dirname, '.next/static')));
  // server.use('/painter/_next/static', express.static(path.join(__dirname, '.next/static')));
  


  // S3, DynamoDB 파일 및 데이터 저장 (저장 페이지)
  server.post('/quiz/painter/api/saveSketch', (req, res, next) => {
    upload(req, res, function(err) {
      if (err instanceof multer.MulterError) {
        return next(err);
      } else if (err) {
        return next(err);
      }

      // console.log(decodeURIComponent(req.body.painter));
      // console.log(decodeURIComponent(req.body.title));
      // console.log('원본파일명 : ' + decodeURIComponent(req.file.originalname));
      // console.log('저장파일명 : ' + req.file.filename);
      // console.log('크기 : ' + req.file.size);
      // console.log('경로 : ' + decodeURIComponent(req.file.location)); // s3 업로드시 업로드 url을 가져옴
      
      const docClient = new aws.DynamoDB.DocumentClient();
      const params = {
        TableName: config.ddbName,
        Item: {
          "createId": moment().format('YYYYMMDDHHmmss') +"_"+ decodeURIComponent(req.body.painter),
          "createDate": moment().format('YYYYMMDDHHmmss'),
          "paint": {
            "src": decodeURIComponent(req.file.location),
            "title": decodeURIComponent(req.body.title)
          },
          "enable": "yes"
        }
      };
      console.log("Adding a new item...");
      const putObjectPromise = docClient.put(params).promise();
      putObjectPromise.then((data) => {
        console.log("Added item:", JSON.stringify(data, null, 2));
        return res.json({ success: 1 });
      }).catch((err) => {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        return res.json({ success: 0 });
      });
    });
  });



  // DynamoDB 데이터 불러오기 (결과 페이지)
  server.get('/quiz/painter/api/getListSketch', (req, res, next) => {
    const docClient = new aws.DynamoDB.DocumentClient();
    const params = {
      TableName: config.ddbName,
      IndexName : "enable",
      KeyConditionExpression: "#enable_key = :enable_val",
      ExpressionAttributeNames: {
        "#enable_key": "enable",
      },
      ExpressionAttributeValues: {
        ":enable_val": "yes"
      }
    };
    docClient.query(params, function(err, data) {
      if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
      } else {
        console.log("Query succeeded.");
        return res.json(data.Items);
      }
    });
  });



  server.use(handle);
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
})

module.exports = server;
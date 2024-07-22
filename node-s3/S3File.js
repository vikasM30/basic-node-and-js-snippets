const env = require("dotenv").config();
const express = require('express');
const app = express();
const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

const s3 = new aws.S3({
    // accessKeyId: process.env.Access_Key_ID,
    // secretAccessKey: process.env.Secret_Access_Key,
})

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "aws-file-upload-multer-s3",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        },
        acl: "public-read",
    })
})

app.post("/save-image", upload.single("image"), (req, res) => {
    console.log('1', req.file)
    res.redirect(req.file.location);
})

app.use(express.static("public"));

app.listen(5678, () => console.log('server is running on port 5678'));
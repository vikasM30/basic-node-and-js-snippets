const fs = require('fs')
const AWS = require('aws-sdk')

let s3 = new AWS.S3({
    params: {
        Bucket: 'samplebucketawss3test'
    }
})
fs.readFile('sample.txt', function(err, data) {
    console.log(data)
    let params = {
        Key: "newSample.txt",
        Body: data
    }
    s3.upload(params, function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Successfully uploaded file.')
        }
    })
})
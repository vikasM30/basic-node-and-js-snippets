const AWS = require('aws-sdk')
const s3 = new AWS.S3()

let params = {
    Bucket: 'samplebucketawss3test',
    Key: 'newSample.txt'
}

s3.getObject(
    params,
    function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data.Body.toString())
            console.log(`Successfully read file form bucket.`)
        }
    }
)
const AWS = require('aws-sdk')
const s3 = new AWS.S3()

let params = {
    Bucket: 'samplebucketawss3test',
    Key: 'newSample.txt'
}

s3.deleteObject(
    params,
    function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(`Successfully deleted file form bucket.`)
        }
    }
)
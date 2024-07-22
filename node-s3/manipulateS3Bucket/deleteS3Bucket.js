const AWS = require('aws-sdk')
const s3 = new AWS.S3()

let params = {
    Bucket: 'samplebucketawss3test',
}

s3.deleteBucket(
    params,
    function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(`Successfully deleted the bucket.`)
        }
    }
)
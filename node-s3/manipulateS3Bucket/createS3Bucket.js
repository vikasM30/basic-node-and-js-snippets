const AWS = require('aws-sdk')
const s3 = new AWS.S3()

let params = {
    Bucket: 'samplebucketawss3test'
}

s3.createBucket(
    params,
    function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(`Successfully created bucket "${data.Location.slice(1)}"`)
        }
    }
)
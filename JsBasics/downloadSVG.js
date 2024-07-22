const fs = require('fs')
const request = require('request')

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path.split(':')[1]))
      .on('close', callback)
  })
}

let newArray = [
    "https://jsappprodreleaseblob.blob.core.windows.net/js-prod40/maps/map_780_d9b68ec5-0b05-4137-9782-6c683715260a_en-US.svg",
    "https://jsappprodreleaseblob.blob.core.windows.net/js-prod40/maps/map_781_feacab0f-63e2-406f-aa42-ae37f7138129_en-US.svg",
    "https://jsappprodreleaseblob.blob.core.windows.net/js-prod40/maps/map_779_4a9ab8b2-606b-42cd-b07b-395f4d8145bf_en-US.svg",
    "https://jsappprodreleaseblob.blob.core.windows.net/js-prod40/maps/map_782_9bdc1f8d-4814-4400-a164-b194d6f59bc8_en-US.svg"
  ]

  newArray.forEach(element => {
      const url = element.split('net')[0] + 'net'
      const path = element.split('net')[1]
      
      download(url, path, () => {
        console.log('✅ Done!')
      })
  });

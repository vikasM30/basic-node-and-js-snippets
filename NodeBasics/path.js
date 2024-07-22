const path = require('path')

const pathObj = path.parse(__filename)
const pathObj2 = path.parse(__dirname)
console.log(pathObj)
console.log(pathObj2)
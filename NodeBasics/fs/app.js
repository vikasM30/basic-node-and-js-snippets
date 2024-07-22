var fs = require('fs')

const appendData = '\nHello moto'
const writeData = 'write Hello moto'
fs.readFile('abc.txt', 'utf-8', (err, data) => {
    console.log(data)
    fs.appendFile('abc.txt', appendData, (err) => {
        console.log('Data Saved.')
    })
})

fs.writeFile('newAbc.txt', writeData, (err) => {
    console.log('Data SAved.')
})
// fs.unlink('newAbc.txt', (err) => {
//     console.log('Deleted.')
// })
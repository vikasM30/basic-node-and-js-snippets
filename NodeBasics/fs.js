const fs = require('fs');
const files = fs.readdirSync('./')
// console.log(files)

fs.readdir('./', (err, data) => {
    err ? console.log('Error', err): console.log('files', data)
})

// fs.unlink('C:\\Users\\admin\\Desktop\\deleteFile', (err) => {
//   if (err) throw err;
//   console.log('successfully deleted /tmp/hello');
// });

// fs.unlink('C:\Users\admin\Desktop\mynewfile2.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });
// const path = require("path")
// console.log(__dirname, __filename)
// console.log(path.resolve())
// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.path;
//       var newpath = 'C:/Users/admin/' + files.filetoupload.name;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);
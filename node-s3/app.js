const express = require('express')
const multer = require('multer')
let app = express()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public")
    },
    filename: function (req, file, cb) {
        const parts = file.mimetype.split("/")
        cb(null, `${file.fieldname}-${Date.now()}.${parts[1]}`)
    }
})

const upload = multer({storage})

app.post("/save-image", upload.single("image"), (req, res) => {
    // res.sendFile(`${__dirname}/public/${req.file.filename}`)
    res.status(200).send({
        status: true,
        data: {
          File: req.file,
        },
        message: "File Saved successfully .",
      });

})

app.use(express.static("public"))

app.listen(3000, () => {
    console.log("server running...")
})
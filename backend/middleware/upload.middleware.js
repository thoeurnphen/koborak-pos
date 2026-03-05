const multer = require('multer');
const path = require('path');
const fs = require('fs');
const dayjs = require('dayjs');

//check directory
const uploadPath = path.join(__dirname, '../upload');

// create upload folder
if(!fs.existsSync('upload')){
    fs.mkdirSync('upload')
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload')
    },
    filename: function (req, file, cb) {
        const timestamp = dayjs().format('YYYY-MM-DD-HH-mm-ss')
        cb(null, timestamp + "-" + file.originalname);
    }
})

const upload = multer({ storage: storage })

module.exports = upload;

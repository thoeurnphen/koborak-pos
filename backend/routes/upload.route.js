const express = require('express');
const { uploadImage } = require('../controllers/upload.controller');
const { removeFile } = require('../controllers/remove.controller');
const uploadRouter = express.Router();


uploadRouter.route('/')
    .post(uploadImage)
    .delete(removeFile)


module.exports = uploadRouter;
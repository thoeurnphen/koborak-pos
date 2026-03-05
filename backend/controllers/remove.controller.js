const path = require('path');
const fs = require('fs');
exports.removeFile = (req, res) => {
    try{

        if(!req.body){
            res.status(400).json({
                success: false,
                message: "image is requried !!!"
            })
        }
        const image = req.body.file;

        const imagePath = path.join(__dirname, "../upload", image);

        if(fs.existsSync(imagePath)){
            fs.unlinkSync(imagePath);
            return res.status(200).json({ 
                success: true, 
                message: "Image deleted successfully!" 
            }) 
        }

    }catch(err){
        res.status(500).json({
            succeess: false,
            error: err.message
        })
    }
}

// module.exports = removeFile

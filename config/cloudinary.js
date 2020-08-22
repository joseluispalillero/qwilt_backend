const cloudinary = require('cloudinary')
const multer = require('multer')
const cloudinaryStorage = require('multer-storage-cloudinary')


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = cloudinaryStorage({
    cloudinary,
    folder: 'Images qwilt',
    allowedFormats: ['jpg', 'png'],
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const uploadCloud = multer({ storage })

module.exports = uploadCloud
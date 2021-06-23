
const { upload } = require('../controllers/UploadController')
const uploadCloud = require('../config/cloudinary')
const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.post('/upload', uploadCloud.single('file'), upload)

module.exports = router;

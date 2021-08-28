const router = require('express').Router();
const { OK } = require('http-status-codes');
const { upload } = require('../controllers/UploadController');
const uploadCloud = require('../config/cloudinary');

router.get('/', (req, res) => {
  res.status(OK).json({ msg: 'Working' });
});

router.post('/upload', uploadCloud.single('file'), upload);

module.exports = router;

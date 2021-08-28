const router = require('express').Router();
const {
  createProperty, getAllProperties, getOneProperty, updateProperty, deleteProperty, getStatusProperty,
} = require('../controllers/propertiesController');

router.post('/create', createProperty);
router.get('/all', getAllProperties);
router.get('/detail/:id', getOneProperty);
router.patch('/update/:id', updateProperty);
router.delete('/delete/:id', deleteProperty);
router.get('/status/', getStatusProperty);

module.exports = router;

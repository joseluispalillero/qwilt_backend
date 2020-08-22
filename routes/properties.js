const router = require('express').Router();
const { createPropertie, getAllProperties, getOnePropertie, updatePropertie, deletePropertie } = require('../controllers/propertieController')


router.post('/create', createPropertie)
router.get('/all', getAllProperties)
router.get('/detail/:id', getOnePropertie)
router.patch('/update/:id', updatePropertie)
router.delete('/delete/:id', deletePropertie)


module.exports = router;
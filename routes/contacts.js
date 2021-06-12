const router = require('express').Router();
const { createContact, getAllContacts, getOneContact, updateContact, deleteContact, getTypeContacts } = require('../controllers/contactController')


router.post('/create', createContact)
router.get('/all', getAllContacts)
router.get('/detail/:id', getOneContact)
router.patch('/update/:id', updateContact)
router.delete('/delete/:id', deleteContact)
router.get('/type/', getTypeContacts)


module.exports = router;
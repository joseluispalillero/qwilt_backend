const router = require('express').Router();
const {
  createFinancial, getAllFinancials, getOneFinancial, updateFinancial, deleteFinancial,
} = require('../controllers/financialController');

router.post('/create', createFinancial);
router.get('/all', getAllFinancials);
router.get('/detail/:id', getOneFinancial);
router.patch('/update/:id', updateFinancial);
router.delete('/delete/:id', deleteFinancial);

module.exports = router;

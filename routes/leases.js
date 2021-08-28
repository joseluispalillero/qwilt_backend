const router = require('express').Router();
const {
  createLease, getAllLeases, getOneLease, updateLease, deleteLease,
} = require('../controllers/leaseController');

router.post('/create', createLease);
router.get('/all', getAllLeases);
router.get('/detail/:id', getOneLease);
router.patch('/update/:id', updateLease);
router.delete('/delete/:id', deleteLease);

module.exports = router;

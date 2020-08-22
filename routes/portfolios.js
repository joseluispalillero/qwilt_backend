const router = require('express').Router();
const { createPortfolio, getAllPortfolios, getOnePortfolio, updatePortfolio, deletePortfolio } = require('../controllers/portfolioController')


router.post('/create', createPortfolio)
router.get('/all', getAllPortfolios)
router.get('/detail/:id', getOnePortfolio)
router.patch('/update/:id', updatePortfolio)
router.delete('/delete/:id', deletePortfolio)


module.exports = router;
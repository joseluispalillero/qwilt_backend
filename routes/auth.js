const router = require('express').Router();
const { signup, login, loggedUser, logout, createUser, updateUser, deleteUser } = require('../controllers/authController')
const passport = require('../config/passport')
const { verifyToken } = require('../config/jwt')


router.post('/signup', signup)
//router.post('/createuser', createUser)
router.post('/login', passport.authenticate('local'), login)
router.get('/logged', verifyToken, loggedUser)
router.get('/logout', logout)
router.delete('/delete/:id', deleteUser)
module.exports = router;
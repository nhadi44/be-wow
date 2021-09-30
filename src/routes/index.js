const express = require('express')
const router = express.Router()

const { registerUser, getRegister, getRegisters, updateRegister, deleteRegister } = require('../controllers/register')

router.post('/register', registerUser)
router.get('/registers', getRegisters)
router.get('/register/:id', getRegister)
router.patch('/register/:id', updateRegister)
router.delete('/register/:id', deleteRegister)

module.exports = router
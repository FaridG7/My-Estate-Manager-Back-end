const express = require('express')
const { getUser } = require('./controller')
const router = express.Router()

router.get('/user', getUser)

export default router
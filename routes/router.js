const express = require('express')
const { getPrimaryNumbers, savePrimaryNumbers } = require('./database-saver')
const router = express.Router()

router.post('/API/save', savePrimaryNumbers)

router.get('/API/save', getPrimaryNumbers)

module.exports = router

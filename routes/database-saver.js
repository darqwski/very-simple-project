const express = require('express')
const { saveToFile, readFromFile } = require('./utils')
const router = express.Router()

router.post('/API/save', async function (req, res, next) {
    const results = req.body

    const onlyPrimaryNumbers = Object.entries(results)
        .filter(([, isPrimary]) => isPrimary)
        .map(([number]) => number)
    await saveToFile(onlyPrimaryNumbers, './database/results.json')
    res.send({ message: 'OK' })
})

router.get('/API/save', async (req, res, next) => {
    const fileContent = readFromFile('./database/results.json')

    res.send(fileContent)
})

module.exports = router

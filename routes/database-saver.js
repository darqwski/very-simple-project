const { saveToFile, readFromFile } = require('./utils')

const savePrimaryNumbers = async (req, res, next) => {
    const results = req.body

    const onlyPrimaryNumbers = Object.entries(results)
        .filter(([, isPrimary]) => isPrimary)
        .map(([number]) => number)
    await saveToFile(onlyPrimaryNumbers, './database/results.json')
    res.send({ message: 'OK' })
}

const getPrimaryNumbers = async (req, res, next) => {
    const fileContent = readFromFile('./database/results.json')

    res.send(fileContent)
}

module.exports = {
    getPrimaryNumbers,
    savePrimaryNumbers,
}

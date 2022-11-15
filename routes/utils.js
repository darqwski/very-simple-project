const fs = require('fs')

const saveToFile = (content, fileName) => {
   fs.writeFileSync(fileName, JSON.stringify(content))
}

const readFromFile = (fileName) => {
   const content = fs.readFileSync(fileName)

   return content.toString();
}

module.exports = {
   saveToFile,
   readFromFile
}

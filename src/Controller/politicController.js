const fs = require('fs')
const path = require('path')


const filePath = path.resolve(__dirname, '../..',  'public/asset/BIS.pdf')

//

const getPolitic = async (req, res) => {
  try {

    const file = fs.readFileSync(filePath)
    res.setHeader('Content-Type', 'application/pdf')
    res.status(200).send(file)

  } catch (error) {
    res.status(500).json({message: `Не удалось прочитать файл ${error.message}`})
  }
}


module.exports = { getPolitic }
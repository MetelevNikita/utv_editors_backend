const express  = require('express');
const dotnev = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');


const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


//


const publicFolder = path.resolve(__dirname, '../public');
console.log(publicFolder);



app.get('/', (req, res) => {

  try {

    res.status(200).sendFile(publicFolder + '/html/index.html');

  } catch (error) {
    res.status(500).json({ message: error.message })
  }

})







// listen


const PORT = process.env.PORT || 5500


const startServer = () => {
  try {
    app.listen(PORT, ()=> {
      console.log(`Сервер запущен на порту ${PORT}`)
    })
  } catch (error) {
    console.error(`Сервер не запустился на порту ${PORT}`)
  }
}

startServer()
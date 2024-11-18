const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');


const prisma = new PrismaClient();

// logs

const { createMessageLog } = require('./../util/sendToLogs');

//


const login = (req, res) => {
  try {

    const {email, password} = req.body;

    if(!email || !password) {
      res.status(400).send({message: 'Не все поля заполнены'})
      return
    }

    const getUser = prisma.user.findFirst({
      where: {
        email: email,
      }
    })


    getUser.then(user => {

      const isMatch = bcrypt.compareSync(password, user.password)
      console.log(isMatch)


      if(!isMatch) {
        res.status(400).send({message: 'Неверный пароль'})
        createMessageLog(`Неверный имя пользовтеля и пароль`);
        return
      }

      const token = jwt.sign({id: getUser.id}, process.env.JWT_SECRET, {expiresIn: '1h'});

      createMessageLog(`Доступ пользователю ${user.name} - ${user.email} разрешен.`);

      res.cookie('token', token);
      res.status(200).send(token)

    })

  } catch (error) {
    createMessageLog(`Ошибка сервера ${error.toString()}`);
    res.status(500).send({message: 'Ошибка сервера'})
  }
};


module.exports = { login }
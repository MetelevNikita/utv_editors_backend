const express = require('express')

// module

const { login } = require('./../Controller/loginController')

//

const loginRouter = express.Router()

//

loginRouter.post('/login', login)

// 

module.exports = loginRouter
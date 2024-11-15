const express = require('express');

// module

const { getUsers, postUser, updateUser, deleteUser, getSingleUser  } = require('./../Controller/usersController')

//

const usersRouter = express.Router();

//

usersRouter.get('/users', getUsers)
usersRouter.get('/users/:id', getSingleUser)
usersRouter.post('/users', postUser)
usersRouter.delete('/users/:id', deleteUser)
usersRouter.put('/users/:id', updateUser)


module.exports = usersRouter;

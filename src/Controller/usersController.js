const { PrismaClient } = require('@prisma/client')
const bcrytp = require('bcryptjs')

const prisma = new PrismaClient()

const getUsers = async (req, res) => {
  try {

    const getUsers = await prisma.user.findMany()

    if(getUsers.length < 1) {
      res.status(404).send([])
      return
    }

    res.status(200).send(getUsers)

  } catch (error) {
    res.status(500).send(error.message)
  }
}


const getSingleUser = async (req, res) => {
  try {

    const { id } = req.params
    const getSingleUser = await prisma.user.findUnique({where: { id: Number(id) } })

    if(!getSingleUser) {
      res.status(404).send(error.message)
      return
    }

    res.status(200).send(getSingleUser)

  } catch (error) {
    res.status(500).send(error.message)
  }
}


const postUser = async (req, res) => {
  try {

    const { name, lastname, email, telegram, password, repeat_password, createdAt, updatedAt } = req.body

    const salt = bcrytp.genSaltSync(10)
    const hashPassword = bcrytp.hashSync(password, salt)

    const createUser = await prisma.user.create({
      data: {
        name: name,
        lastname: lastname,
        email: email,
        telegram: telegram,
        password: hashPassword,
        repeat_password: hashPassword,
        createdAt: new Date().toLocaleString(),
        updatedAt: ''
      }
    })


    if(!createUser) {
      res.status(404).send(error.message)
      return
    }


    

    res.status(200).send(createUser)

  } catch (error) {
    res.status(500).send(error.message)
  }
}


const updateUser = async (req, res) => {
  try {

    const { id } = req.params
    const { name, lastname, email, telegram, password, repeat_password, createdAt, updatedAt } = req.body

    const updateUser = await prisma.user.update({
      where: {
        id: Number(id)
      },
      data: {
        name: name,
        lastname: lastname,
        email: email,
        telegram: telegram,
        password: password,
        repeat_password: repeat_password,
        createdAt: createdAt,
        updatedAt: new Date().toLocaleString()
      }
    })

    if(!updateUser) {
      res.status(404).send(error.message)
      return
    }

    res.status(200).send(updateUser)


  } catch (error) {
    res.status(500).send(error.message)
  }
}


const deleteUser = async (req, res) => {
  try {

    const { id } = req.params
    console.log(id)

    const deleteUser = await prisma.user.delete({
      where: {
        id: Number(id)
      }
    })

    if(!deleteUser) {
      res.status(404).send(error.message)
      return
    }

    res.status(200).send(deleteUser)

  } catch (error) {
    res.status(500).send(error.message)
  }
}


module.exports = { getUsers, postUser, updateUser, deleteUser, getSingleUser }
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const getFilmingCard = async (req, res) => {
  try {

    const filmingCard = await prisma.filming_cards.findMany()

    if(filmingCard.length < 1) {
      res.status(404).send([])
      return
    }

    res.status(200).send(filmingCard)

  } catch (error) {

    res.status(500).send([])

  }
}

const postFilmingCard = async (req, res) => {
  try {

    const {name, title, category, executor, date_start, date_end, time_start, time_end, place, contact, description, price, cloth, author, technical_specialist, sound_recording, createdAt, updatedAt} = req.body

    const newFilmingCard = await prisma.filming_cards.create({
      data: {

        title: title,
        name: name,
        category: category,
        executor: executor,
        date_start: date_start,
        date_end: date_end,
        time_start: time_start,
        time_end: time_end,
        place: place,
        contact: contact,
        description: description,
        price: price,
        cloth: cloth,
        author: author,
        technical_specialist: technical_specialist,
        sound_recording: sound_recording,
        createdAt: new Date().toLocaleString(),
        updatedAt: "",
      }
    })

    if(!newFilmingCard) {
      res.status(404).send({'message': `Не удалось создать карточку съёмки`})
      return
    }
      res.status(200).send(newFilmingCard)
  }
   catch (error) {
    res.status(500).send({message: `Ошибка созданяи новой карточки съёмки ${error.message}`})
  }
}

const getSingleFilmingCard = async (req, res) => {
  try {

    const filmingCard = await prisma.filming_cards.findUnique({
      where: {
        id: Number(req.params.id)
      }
    })

    if(!filmingCard) {
      res.status(404).send({'message': `Карточка съёмки не найдена`})
      return
    }

    res.status(200).send(filmingCard)


  } catch (error) {
    res.status(500).send({message: `Ошибка получения карточки съёмки ${error.message}`})
  }
}

const updateFilmingCard = async (req, res) => {
  try {


    const { id } = req.params
    const {name, title, category, executor, date_start, date_end, time_start, time_end, place, contact, description, price, cloth, author, technical_specialist, sound_recording, createdAt, updatedAt} = req.body



    const updateFilmingCard= await prisma.filming_cards.update({
      where: {
        id: Number(id)
      },

      data: {
        title: title,
        name: name,
        category: category,
        executor: executor,
        date_start: date_start,
        date_end: date_end,
        time_start: time_start,
        time_end: time_end,
        place: place,
        contact: contact,
        description: description,
        price: price,
        cloth: cloth,
        author: author,
        technical_specialist: technical_specialist,
        sound_recording: sound_recording,
        updatedAt:new Date().toLocaleString(),
      }

    })

    if(!updateFilmingCard) {
      res.status(404).send({'message': `Карточка съёмки не найдена`})
    }

    res.status(200).send(updateFilmingCard)

  } catch (error) {
    res.status(500).send({message: `Ошибка обновления карточки съёмки ${error.message}`})
  }
}

const deleteFilmingCard  = async (req, res) => {
  try {


    const { id } = req.params
    console.log(id)

    const filmingCard = await prisma.filming_cards.delete({
      where: {id: Number(id)}
    })

    if(!filmingCard) {
      res.status(404).send({'message': `Карточка съёмки не найдена`})
      return

    }

    res.status(200).send(`Карточку с номеров ${id} удалена`)


  } catch (error) {
    res.status(500).send({message: `Ошибка удаления карточки съёмки ${error.message}}`
    })
  }

}


module.exports = { getFilmingCard, getSingleFilmingCard, postFilmingCard, deleteFilmingCard, updateFilmingCard }
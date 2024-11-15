const express = require('express');

// module

const { getFilmingCard, postFilmingCard, getSingleFilmingCard, deleteFilmingCard, updateFilmingCard } = require('./../Controller/filmingControllers');

//

const filingRouter = express.Router();

//


filingRouter.get('/filming', getFilmingCard)
filingRouter.get('/filming/:id', getSingleFilmingCard)
filingRouter.post('/filming', postFilmingCard)
filingRouter.put('/filming/:id', updateFilmingCard)
filingRouter.delete('/filming/:id', deleteFilmingCard)


module.exports = filingRouter;


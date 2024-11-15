const express = require('express');

// module

const { getPolitic } = require('./../Controller/politicController');

//

const politicRouter = express.Router();

//

politicRouter.get('/politic', getPolitic)


module.exports = politicRouter


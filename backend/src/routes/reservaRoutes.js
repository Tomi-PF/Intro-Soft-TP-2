const express = require('express');
const router = express.Router();

const {
    getAllReservas,
    getReserva
} = require('../controllers/reservaController')

router.get('/', getAllReservas)
router.get('/:id', getReserva)

module.exports = router
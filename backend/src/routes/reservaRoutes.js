const express = require('express');
const router = express.Router();

const {
    getAllReservas,
    getReserva,
    createReserva
} = require('../controllers/reservaController')

router.get('/', getAllReservas)
router.get('/:id', getReserva)
router.post('/', createReserva)

module.exports = router
const express = require('express');
const router = express.Router();

const {
    getAllReservas,
    getReserva,
    createReserva,
    updateReserva
} = require('../controllers/reservaController')

router.get('/', getAllReservas)
router.get('/:id', getReserva)
router.post('/', createReserva)
router.put('/:id', updateReserva)

module.exports = router
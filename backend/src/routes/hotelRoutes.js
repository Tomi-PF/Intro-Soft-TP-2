const express = require('express');
const router = express.Router();

const {
    getAllHoteles,
    getHotel,
    getHotelbyCiudad,
    createHotel,
    updateHotel,
    deleteHotel
} = require('../controllers/hotelController')

router.get('/', getAllHoteles)
router.get('/:id', getHotel)
router.get('/:name/:id', getHotelbyCiudad)
router.post('/', createHotel)
router.put('/:id', updateHotel)
router.delete('/:id', deleteHotel)

module.exports = router
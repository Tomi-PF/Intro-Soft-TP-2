const express = require('express');
const router = express.Router();

const {
    getAllHoteles,
    getHotel,
    createHotel,
    updateHotel
} = require('../controllers/hotelController')

router.get('/', getAllHoteles)
router.get('/:id', getHotel)
router.post('/', createHotel)
router.put('/:id', updateHotel)

module.exports = router
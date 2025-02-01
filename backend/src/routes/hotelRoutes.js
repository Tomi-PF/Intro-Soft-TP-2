const express = require('express');
const router = express.Router();

const {
    getAllHoteles,
    getHotel,
    createHotel
} = require('../controllers/hotelController')

router.get('/', getAllHoteles)
router.get('/:id', getHotel)
router.post('/', createHotel)

module.exports = router
const express = require('express');
const router = express.Router();

const {
    getAllHoteles,
    getHotel
} = require('../controllers/hotelController')

router.get('/', getAllHoteles)
router.get('/:id', getHotel)

MediaSourceHandle.exports = router
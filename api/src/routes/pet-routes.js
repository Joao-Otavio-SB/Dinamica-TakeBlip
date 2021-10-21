const express = require('express')
const router = express.Router()
const petController = require('../controllers/pet-controller')

router.post('/', petController.petPost)

router.get('/:nome', petController.petGet)

module.exports = router

const router = require('express').Router()

const userRoutes = require('./userRoutes')
const reviewRoutes = require('./reviewRoutes')
const movieRoutes = require('./movieRoutes')

router.use('/users', userRoutes)
router.use('/reviews', reviewRoutes)
router.use('/movies', movieRoutes)

module.exports = router;
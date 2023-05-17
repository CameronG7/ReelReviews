const router = require('express').Router();
const { Movie } = require('../../../models');

router.get('/', async (req, res) => {
    try {
        const movieData = await Movie.findAll();
        res.status(200).json(movieData);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/movie' , async (req, res) => {
  try {
      const reviewData = await Review.create(req.body);
      res.status(200).json(reviewData);
  } catch (error) {
      res.status(500).json(error);
  }
});
module.exports = router;
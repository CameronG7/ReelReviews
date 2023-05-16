const router = require('express').Router();
const { Review } = require('../../../models');



router.get('/', async (req, res) => {
    try {
        const reviewData = await Review.findAll();
        res.status(200).json(reviewData);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.post('/review', async (req, res) => {
    try {
        const reviewData = await Review.create(req.body);
        res.status(200).json(reviewData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
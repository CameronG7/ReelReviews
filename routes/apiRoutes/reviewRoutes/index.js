const router = require('express').Router();
const { User, Review } = require('../../../models');
const sequelize = require('../../../config/connection');
const withAuth = require('../../../utils/auth');


router.get('/', async (req, res) => {
    try {
        const reviewData = await Review.findAll();
        res.status(200).json(reviewData);
    } catch (error) {
        res.status(500).json(error);
    }
});
 //find a review by its id
router.delete('/:id', withAuth, async (req, res) => {

    try {
        const reviewData = await Review.destroy(req.params.id);
        if (!reviewData) {
            res.status(404).json({ message: 'No review found with that id!' });
            return;
        }
        res.status(200).json(reviewData);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});


router.post('/review', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.create({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.user_id,
        })
        .then((newReview) => {
            res.json(newReview);
        })
        .catch((err) => {
            res.json(err);
        });
    } catch (error) {
        res.status(500).json(error);
    }
});


router.put('/:id', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!reviewData) {
            res.status(404).json({ message: 'No review found with that id!' });
            return;
        }
        res.status(200).json(reviewData);
    } catch (error) {
        res.status(500).json(error);
    }
});

// 

module.exports = router;
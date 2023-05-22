const router = require('express').Router();
const { User, Review, Movie } = require('../../../models');
const sequelize = require('../../../config/connection');
const withAuth = require('../../../utils/auth');
const _ = require('lodash');


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



router.post('/', withAuth, async (req, res) => {
    try {
        const title = _.camelCase(req.body.title);
        const movie = await Movie.findOne({where: {title: title}});
        if (!movie) {
            console.log('movie not found');
            newMovie = await Movie.create({title: title});
        }
        const movieId = movie ? movie.id : newMovie.id;
        console.log(req.session.user.id);

        const reviewData = await Review.create({
            movieId: movieId,
            comment: req.body.comment,
            userId: req.session.user.id,
            rating: req.body.rating,

        })
        .then((newReview) => {
            console.log(newReview);
            res.json(newReview);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
    } catch (error) {
        console.log(error);
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
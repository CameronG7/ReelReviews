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
 // find a review by its id
// router.delete('/:id', async (req, res) => {

//     try {
//         const reviewData = await Review.findByPk(req.params.id);
//         if (!reviewData) {
//             res.status(404).json({ message: 'No review found with that id!' });
//             return;
//         }
//         res.status(200).json(reviewData);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json(error);
//     }
// });


router.post('/review', async (req, res) => {
    try {
        const reviewData = await Review.create(req.body);
        res.status(200).json(reviewData);
    } catch (error) {
        res.status(500).json(error);
    }
});

// 

module.exports = router;
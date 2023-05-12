const { Review } = require('../models');

const reviewData = [
  {
    rating: 8.1,
    comment: 'Idk what to say',
    userId: 1,
    movieId: 5,
    reviewId: 1,
  },
  {
    rating: 9.9,
    comment: 'I love keanu reeves',
    userId: 2,
    movieId: 2,
    reviewId: 2,
  },
  {
    rating: 9.5,
    comment: 'never seen it',
    userId: 3,
    movieId: 3,
    reviewId: 3,
  },
  {
    rating: 7.3,
    comment: 'Brad Pitts in it always forget the other dudes name',
    userId: 1,
    movieId: 1,
    reviewId: 4,
  },
  {
    rating: 9.8,
    comment: 'RIP Heath Ledger ',
    userId: 1,
    movieId: 4,
    reviewId: 5,
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;

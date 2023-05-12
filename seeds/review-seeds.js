const { Review } = require('../models');

const reviewData = [
  {
    review_moviename: 'Star Wars',
    text: 'Idk what to say',
    user_id: 1,
    movie_id: 1,
    review_id: 1,
  },
  {
    review_moviename: 'The Matrix',
    text: 'I love keanu reeves',
    user_id: 2,
    movie_id: 2,
    review_id: 2,
  },
  {
    review_moviename: 'The Godfather',
    text: 'never seen it',
    user_id: 3,
    movie_id: 3,
    review_id: 3,
  },
  {
    review_moviename: 'Fight Club',
    text: 'Brad Pitts in it always forget the other dudes name',
    user_id: 1,
    movie_id: 4,
    review_id: 4,
  },
  {
    review_moviename: 'The Dark Knight',
    text: 'RIP Heath Ledger ',
    user_id: 1,
    movie_id: 5,
    review_id: 5,
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;

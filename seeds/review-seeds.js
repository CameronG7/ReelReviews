const { Review } = require('../models');

const reviewData = [
  {
    rating: 8.1,
    comment: 'To infinity and beyond! Wait no, that is the wrong movie. Well, either way, absolute slapper. I love space, I love lightsabers, and I love John Williams. The combo makes for a great set of movies.',
    userId: 1,
    movieId: 5,
    reviewId: 1,
  },
  {
    rating: 9.9,
    comment: 'I love keanu reeves. He has such a way on screen. And his hair... need I say any more?',
    userId: 2,
    movieId: 2,
    reviewId: 2,
  },
  {
    rating: 9.5,
    comment: "This movie is a classic. I have watched it at least 10 times. I would recommend to anyone who likes a good action movie. Though, be prepared for its lenth. It is a long one. But despite this the directors manage to capture their audience and have them come along for what is truly a great ride. Wouldn't put it as my #1 as IMDB has, but it is up there among the greats for sure.",
    userId: 3,
    movieId: 3,
    reviewId: 3,
  },
  {
    rating: 7.3,
    comment: 'This movie throws you on a rollercoaster, ending in the biggest plot twist I have ever witnessed. Brad Pitt is also absolutely amazing in this movie. So is the other dude but I keep forgetting his name. Would highly recommend to anyone!',
    userId: 1,
    movieId: 1,
    reviewId: 4,
  },
  {
    rating: 9.8,
    comment: 'RIP Heath Ledger. Definitely deserved the Oscar for this one. Grpping movie with fantastic cinematography and acting. Definitely watch in full cinematic mode to get the most out of it. A few jump scares, but nothing too bad.',
    userId: 1,
    movieId: 4,
    reviewId: 5,
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;

const Movie = require('./Movie');
const Review = require('./Review');
const User = require('./User');
const Tag = require('./Tag');

Movie.hasMany(Review, {
  foreignKey: 'movieId'
});

Movie.hasMany(Tag, {
  foreignKey: 'movieId'
});

User.hasMany(Review, {
  foreignKey: 'userId'
});

Review.belongsTo(Movie, {
  foreignKey: 'movieId'
});

Review.belongsTo(User, {
  foreignKey: 'userId'
});

Review.hasMany(Tag, {
  foreignKey: 'reviewId'
});

module.exports = { Movie, Review, User, Tag };

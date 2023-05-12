const Movie = require('./Movie');
const Review = require('./Review');
const User = require('./User');
const Tag = require('./Tag');

Movie.hasMany(Review, {
  foreignKey: 'movieId'
});

Movie.hasMany(Tag, {
  foreignKey: 'id'
});

User.hasMany(Review, {
  foreignKey: 'userId'
});

Review.belongsTo(Movie, {
  foreignKey: 'movieId'
});

Review.belongsTo(User, {
  foreignKey: 'id'
});

Review.hasMany(Tag, {
  foreignKey: 'id'
});

module.exports = { Movie, Review, User, Tag };

const Movie = require('./Movie');
const Review = require('./Review');
const User = require('./User');
const Tag = require('./Tag');
const MovieTag = require('./MovieTag');
const ReviewTag = require('./ReviewTag');

Movie.hasMany(Review, {
  foreignKey: 'movieId'
});

// Movie.hasMany(Tag, {
//   foreignKey: 'id'
// });
Movie.belongsToMany(Tag, {
  through: MovieTag,
  foreignKey: 'movieId'
});


User.hasMany(Review, {
  foreignKey: 'userId'
});

Review.belongsTo(Movie, {
  foreignKey: 'movieId',
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Review.hasMany(Tag, {
//   foreignKey: 'id'
// });
Review.belongsToMany(Tag, {
  through: ReviewTag,
  foreignKey: 'reviewId'
});



module.exports = { Movie, Review, User, Tag, MovieTag, ReviewTag };

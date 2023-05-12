const { Movie } = require('../models');

const movieData = [
  {
    title: 'Fight Club',
  },
  {
    title: 'The Matrix',
  },
  {
    title: 'The Godfather',
  },
  {
    title: 'The Dark Knight',
  },
  {
    title: 'Star Wars',
  },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;

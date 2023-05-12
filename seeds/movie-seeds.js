const { Movie } = require('../models');

const movieData = [
  {
    movie_name: 'Fight Club',
  },
  {
    movie_name: 'The Matrix',
  },
  {
    movie_name: 'The Godfather',
  },
  {
    movie_name: 'The Dark Knight',
  },
  {
    movie_name: 'Star Wars',
  },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;

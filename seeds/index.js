const seedMovies = require('./movie-seeds');
const seedReviews = require('./review-seeds');
const seedUsers = require('./user-seeds');
const seedTags = require('./tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedMovies();
  console.log('\n----- MOVIES SEEDED -----\n');

  console.log('\n----- TAGS SYNCED -----\n');
  await seedTags();
  console.log('\n----- USERS SEEDED -----\n');

  await seedUsers();

  console.log('\n----- REVIEWS SEEDED -----\n');
  await seedReviews();
  


process.exit(0);
};

seedAll();

const seedMovies = require('./movie-seeds');
const seedReviews = require('./review-seeds');
const seedUsers = require('./user-seeds');
const seedTags = require('./tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedMovies();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedUsers();
  console.log('\n----- TAGS SEEDED -----\n');
await seedReviews();
  console.log('\n----- PRODUCTS SEEDED -----\n');
await seedReviews();

  process.exit(0);
};

seedAll();

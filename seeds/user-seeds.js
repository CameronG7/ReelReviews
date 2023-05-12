const { User } = require('../models');

const userData = [
  {
    user_id: 1,
    review_id: 1,
    login_id: 'katherine',
  },
  {
    user_id: 2,
    review_id: 2,
    login_id: 'jack',
  },
  {
    user_id: 3,
    review_id: 3,
    login_id: 'jill',
  },
  {
    user_id: 4,
    review_id: 4,
    login_id: 'joe',
  },
  {
    user_id: 5,
    review_id: 5,
    login_id: 'james',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

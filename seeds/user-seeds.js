const { User } = require('../models');

const userData = [
  {
    email: 'kat@email.com',
   password: 'password1',
    username: 'katherine',
  },
  {
    email: 'jack@email.com',
    password: 'password2',
    username: 'jack',
  },
  {
    email: 'jill@email.com',
    password: 'password3',
    username: 'jill',
  },
  { 
    email: 'joe@email.com',
    password: 'password4',
    username: 'joe',
  },
  {
    email: 'james@email.com',
    password: 'password5',
    username: 'james',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

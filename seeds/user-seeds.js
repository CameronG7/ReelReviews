const { User } = require('../models');

const userData = [
  {
    email: 'kat@email.com',
   password: 'pass',
    username: 'kat',
  },
  {
    email: 'jack@email.com',
    password: 'pass',
    username: 'jack',
  },
  {
    email: 'jill@email.com',
    password: 'pass',
    username: 'jill',
  },
  { 
    email: 'joe@email.com',
    password: 'pass',
    username: 'joe',
  },
  {
    email: 'james@email.com',
    password: 'pass',
    username: 'james',
  },
];

const  seedUsers = () =>  User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,

});

module.exports = seedUsers;

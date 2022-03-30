const { User } = require('../models');

const userData = [
  {
    username: 'moontaeil',
    password: 'password123'
  },
  {
    username: 'johnnysuh',
    password: 'password123'
  },
  {
    username: 'leetaeyong',
    password: 'password123'
  },
  {
    username: 'nayuta',
    password: 'password123'
  },
  {
    username: 'kimdoyoung',
    password: 'password123'
  },
  {
    username: 'jeongjaehyun',
    password: 'password123'
  },
  {
    username: 'kimjungwoo',
    password: 'password'
  },
  {
    username: 'marklee',
    password: 'password'
  },
  {
    username: 'leehaechan',
    password: 'password'
  },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
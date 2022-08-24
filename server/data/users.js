import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Abhishek',
    email: 'Abhishek@BuyItON.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'jerry',
    email: 'tom@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'shera',
    email: 'shera@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;

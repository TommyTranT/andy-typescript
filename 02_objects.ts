// creating a brand new 'type' and an object that fullfills that type
const userA: {
  username: string;
  password: string;
} = {
  username: 'tommytran100',
  password: '1234'
};

// However, this is not the optimal way to do it and can be hard to read.
// To create your own type, you should create an "Interface" that can be used like "string" or "number".

interface User {
  username: string;
  password: string;
}

const userB: User = {
  username: 'tommytran100',
  password: '1234'
// }
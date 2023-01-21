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

interface UserB {
  username: string;
  password: string;
}

const userB: UserB = {
  username: 'tommytran100',
  password: '1234'
};

// Extend initial User interface to add more types. SuperUser would include everything from User(username and password) plus the admin

interface SuperUser extends UserB {
  admin: boolean;
};

// We can use interface within an interface. UserC will have the type "Dog" and have an array of Friends

// Dogs id is an optional type. it may or may not be there

interface Dog {
  id?: number;
  name: string;
  faveToy: string;
  age: boolean;
}

interface UserC {
  username: string;
  password: string;
  friends: UserC[];
  dog?: Dog;          // Dog existing for UserC is optional because of '?'
}

const userC: UserC = {
  username: 'tommytran100',
  password: '1234',
  friends: []
}
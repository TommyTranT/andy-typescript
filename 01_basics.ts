// username can be changed into string OR number OR boolean
// let username: string = 'Tommy'
let username: string | number | boolean = 'Tommy';

username = 'Bob';
username = 42;
username = false;

// array only holds number, numbers array
// const nums: number[] = [];

// array can be string or number
const nums: (string | number)[] = [];

nums.push(4);
nums.push('hello')

// if compiled and nothing shows up, its a good thing.

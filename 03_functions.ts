// what do you need to consume a function?
// arguments, return value, name

// function argument is string. it will return a string. the string returned is in the return
// order matters, name must be before age. age is also optional.
const sayHello = (name: string, age?: number): string => {
  return `hello there ${name}`
} 

sayHello('Tommy', 42);
sayHello('Tommy');

// FUNCTION RETURNS PROMISE

// function requires a number that will resolve in a promise and return a number
const returningPromise = (arg: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(arg);
  })
}

returningPromise(42)
  .then(data => {})
"use strict";
// functions inside of an object
const dog = {
    name: 'Lucky',
    worms: true,
    dewormDog: (numWorms) => { return true; }
};
// callback
const higherOrderFunc = (callback) => {
    callback('string');
};
higherOrderFunc((name) => { });

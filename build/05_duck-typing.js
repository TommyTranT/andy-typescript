"use strict";
const login = (user) => {
    return true;
};
const userTwo = {
    username: 'tommytran',
    password: '1235',
    moreStuff: 'extra things' // -> this is not in the interface, but it has enough things to be considered the same 
};
login(userTwo); // -> function accepts object because it has enough of interface

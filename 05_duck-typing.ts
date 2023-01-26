//  userTwo has more stuff that is not in the interface, but has enough to be pass the typescript error. 
// However, if userTwo is missing something from the interface, it wont work
interface IPotentialUser {
  username: string;
  password: string;
}

const login = (user: IPotentialUser): boolean => { // -> function takes in potential user and returns true
  return true;
}

const userTwo = {
  username: 'tommytran',
  password: '1235',
  moreStuff: 'extra things' // -> this is not in the interface, but it has enough things to be considered the same 
}

login(userTwo);
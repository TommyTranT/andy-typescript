// functions inside of an object

interface IDog2 {
  name: string;
  worms: boolean;
  dewormDog: (numWorms: number) => boolean // ->  function takes in a number and returns a boolean
}

const dog: IDog2 = { // -> Object 'dog' using the IDog2 interface
  name: 'Lucky',
  worms: true,
  dewormDog: (numWorms) => {return true;}
}

// callback
const higherOrderFunc = (callback: (name: string) => void) => {
  callback('string');
};

higherOrderFunc((name) => {}); 
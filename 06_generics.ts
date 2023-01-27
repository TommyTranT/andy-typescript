// what if you know the name of the key but you dont know the data type?

// adding <type> to change its type when consumer defines it
interface IContainer<type> {
  name: string;
  contents: type;
}

// Telling 'type' will be a 'string'
const stringContainer: IContainer<string> = {   
  name: 'string container',
  contents: 'hello world'
}

// Telling 'type' will be 'number'
const numberContainer: IContainer<number> = {
  name: 'number container',
  contents: 50,
}
// what if you know the name of the key but you dont know the data type?

// adding <T> to change its type when consumer defines it
// 'T' just means 'type' but the lazy way to write it
// 'G' is a second generic type we can add. in this case its an array.
interface IContainer<T, G> {
  name: string;
  contents: T;
  arr?: G[];
}

// Telling 'T' will be a 'string'
// Telling 'G' will be a 'number'
const stringContainer: IContainer<string, number> = {   
  name: 'string container',
  contents: 'hello world'
}

// Telling 'T' will be 'number'
// Telling 'G' will be a 'boolean'
const numberContainer: IContainer<number, boolean> = {
  name: 'number container',
  contents: 50,
}
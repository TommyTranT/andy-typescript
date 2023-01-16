const help = (items) => {
  return items.filter((value, index) => {
    return items.indexOf(value) === index;
  });
};

const items = ["cheese", "cheese", "pizza", "hotdog", "pizza"];

console.log(help(items));

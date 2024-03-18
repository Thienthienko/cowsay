const myLife = require("./information");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello i'm ${myLife.name} and i'm from ${myLife.campus}`,
  })
);

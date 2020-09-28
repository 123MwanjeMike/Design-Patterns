const chalk = require("chalk");
console.log(
    chalk.green(`
        Welome to my online shop!
        Oranges, Bananas, Apples, Grapes, and Pineapples
    `)
);
const questions = [
  "Name of fruit you want to buy",
  "How many of these do you need?",
];

// Should work in loop by end of project
const shop = (i = 0) => {
  process.stdout.write(`${questions[i]}`);
  process.stdout.write(`: `);
};
shop();

const cart = [];
process.stdin.on("data", (data) => {
  cart.push(data.toString().trim());
  if (cart.length < questions.length) {
    shop(cart.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  const [fruit, number] = cart;
  console.log(chalk.red(`Your Cart: ${number} ${fruit}`))
  console.log(chalk.blueBright(`Thank you for shopping with us`))
});

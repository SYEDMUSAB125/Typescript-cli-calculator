import inquirer from "inquirer";
import { add, divide, multip, pow, sub } from "./operators.js";
import chalk from "chalk";
// import { rainbowTitle } from "./check.js";
console.log(chalk.bold.italic.rgb(0, 0, 128)('DEVELOP BY SYED MUSAB'));
let input = await inquirer.prompt([{
        message: "Enter your First Number",
        type: "number",
        name: "num1"
    }, {
        message: "Enter your Second Number",
        type: "number",
        name: "num2",
    }, {
        message: "Select your operator",
        type: "list",
        choices: ["+", "-", "*", "/", "pow"],
        name: "operator",
    }
]);
chalkAnimation.rainbow('YOU WANT TO CHECK MY CALCULATOR? \n');
if (input.operator === "+") {
    let result = add(input.num1, input.num2);
    console.log("Sum:", result);
}
else if (input.operator === "-") {
    let result = sub(input.num1, input.num2);
    console.log("Subtarct:", result);
}
else if (input.operator === "*") {
    let result = multip(input.num1, input.num2);
    console.log("Multiply:", result);
}
else if (input.operator === "/") {
    let result = divide(input.num1, input.num2);
    console.log("Divide:", result);
}
else if (input.operator === "pow") {
    let result = pow(input.num1);
    console.log("Power:", result);
}
else {
    console.log("invalid operator");
}

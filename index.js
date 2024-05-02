#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.93,
    INR: 83.28,
    PKR: 278.50,
    TAKA: 109.75,
    YUAN: 7.24,
    BAHT: 36.86,
    NEPALISE: 133.50,
    YEN: 153.73,
    WON: 1368.49,
    RUFIA: 14.95, //Maldives Currency
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "TAKA", "YUAN", "BAHT", "NEPALISE", "YEN", "WON", "RUFIA"]
    },
    {
        name: "to",
        messege: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "TAKA", "YUAN", "BAHT", "NEPALISE", "YEN", "WON", "RUFIA"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    }]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = Math.floor(baseAmount * toAmount);
console.log(convertedAmount);

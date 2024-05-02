#! /usr/bin/env node
import inquirer from 'inquirer'

const currency: any = {
 USD : 1,   ///Base Currency
EUR : 0.93, // European Currency
INR : 83.28,// Indian Currency
PKR : 278.50,//Pakistan Currency
TAKA :109.75,//Bangladeshi Currency
YUAN :7.24,// Chinese Currency
BAHT:36.86,//Thialnd Currency
NEPALISE:133.50,//Nepal Currency
YEN:153.73,//Japnese Currency
WON:1368.49,//South Korean Currency
RUFIA:14.95,//Maldives Currency
};
let user_answer =await inquirer.prompt([{
    name:"from",
    message:"Enter from Currency",
    type:"list",
    choices:["USD","EUR","INR","PKR","TAKA","YUAN","BAHT","NEPALISE","YEN","WON","RUFIA"]
},
{
    name:"to",
    messege:"Enter to Currency",
    type:"list",
    choices:["USD","EUR","INR","PKR","TAKA","YUAN","BAHT","NEPALISE","YEN","WON","RUFIA"]
},
{
    name:"amount",
    message:"Enter Your Amount",
    type:"number",
}]
);
let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount =  user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = Math.floor (baseAmount * toAmount )
console.log(convertedAmount );
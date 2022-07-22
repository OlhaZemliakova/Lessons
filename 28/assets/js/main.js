// minimum 1:

let sum = 0.1 + 0.2;

alert( sum.toFixed(2) );

// minimum 2:

let a = '1';
let b = 2;

alert( +a + b );

// minimum 3:

let storageAmount = prompt('Enter storage amount in GB:');
const fileSize = 820;
let numberOfFiles = Math.floor(storageAmount * 1024 / fileSize);

alert(numberOfFiles);

// normal 1:

let amountOfMoney = +prompt('Enter amount of money:');
let price = +prompt('Enter chocolate price:');
let numberOfItems = Math.floor(amountOfMoney / price);
let restOfMoney = (amountOfMoney % price).toFixed(2);

alert('number of items: ' + numberOfItems + ' change: ' + restOfMoney);

// normal 2: 

// let threeDigitNumber = prompt('Enter a three-digit number: \n ');
// let num1 = n / 100;
// let num2 = Math.floor(n % 100) / 10;
// let num3 = n % 10;
// let reverse = (100 * num3) + (10 * num2) + num1;
// alert(reverse);


// maximum 1:

const annualInterestRate = 0.05;
const periodOfDepost = 2;
const monthsOfYear = 12;

let money = prompt('How much money do you need to deposit?');
let totalAccruedPercent = (money * annualInterestRate / monthsOfYear * periodOfDepost).toFixed(2);

alert('If you put ' + money + ' for 2 months at a deposit rate of 5% per year, you will receive: ' + totalAccruedPercent)


// maximum 2:

2 && 0 && 3 //0

2 || 0 || 3 //2

2 && 0 || 3 //3

// minimum 2:

let userName;
let nameAndSurname;
let firsLastName;
let visitorNameAndSurname;

// minimum 3:

// let user name;
// let name-And-Surname;
// let 1firsLastName;
/*let visitor-NameAnd-Surname;
let user-name and Surname*/

// minimum 4:

// Variable names can be written in lowercase or uppercase, special characters $ , _ can be used.You can use camel case.

// norm 1:

userName = prompt('What is your name?');
alert('Привіт ' + userName);

// norm 2:

const currentYear = 2022;
let birthYear = prompt('What is your year of birth?');
alert(currentYear - birthYear);

// norm 3:

let lengthSideSquare = prompt('What is the length of the side of the square?');
alert(lengthSideSquare * 4);

// maximum 1:

let circleRadius = prompt('What is the radius of the circle?');
alert(Math.pow(circleRadius, 2) * 3.14);

// maximum 2:

let distanceBetweenCities = prompt ('What is distance between cities in km?');
let planTime = prompt('What time do you plan to arrive?');
alert(distanceBetweenCities / planTime);

// maximum 2:

const dollarExchange = 1;
const euroExchange = 0.98;

let currencyExchange = prompt ('Enter the number of dollars to exchange for euros:');
alert(dollarExchange / euroExchange * currencyExchange);

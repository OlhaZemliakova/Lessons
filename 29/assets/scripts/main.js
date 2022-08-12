// minimum 1:

// let userAge = prompt('Enter your age: ');

// if (userAge > 0 && userAge <= 11) {

//     alert('You are a child!');

// } else if (userAge >= 12 && userAge <= 17) {

//     alert('You are a teenager!');

// } else if (userAge >= 18 && userAge <= 59) {

//     alert('You are an adult!');

// } else if (userAge >= 60) {

//     alert('You are a pensioner!');

// } else {

//     alert('Wrong!');
// }


// minimum 2:

// let value = prompt('Enter a number from 0 to 9 and you will receive a special symbol that is located on this key:');

// switch (value) {
//     case '0':
//         alert(')');
//         break;

//     case '1':
//         alert('!');
//         break;

//     case '2':
//         alert('@');
//         break;

//     case '3':
//         alert('#');
//         break;

//     case '4':
//         alert('$');
//         break;

//     case '5':
//         alert('%');
//         break;

//     case '6':
//         alert('^');
//         break;

//     case '7':
//         alert('^');
//         break;
//     case '8':
//         alert('*');
//         break;
//     case '9':
//         alert('(');
//         break;
//     default:
//         alert('there is no such key...');
//         break
// }


// // minimum 3:

// let startNumder = +prompt('start');
// let endNumder = +prompt('end');
// let sum = 0;

// for (let i = startNumder; i <= endNumder; i++) {

//     sum = sum + i;
// }

// alert(sum);

// // minimum 4:

// let number1 = prompt('Enter a first positive integer: ');
// let number2 = prompt('Enter a second positive integer: ');

// while (number1 != number2) {
//     if (number1 > number2) {
//         number1 -= number2;
//     }
//     else {
//         number2 -= number1;
//     }
// }

// alert(number1)


// // minimum 5:

// const num = prompt('Enter a positive number: ');

// console.log(`The factors of ${num} is:`);

// for (let i = 1; i <= num; i++) {

//     if (num % i == 0) {
//         console.log(i);
//     }
// }

// Normal 1:

// let n = +prompt('enter a number:');
// let temp = n;
// let rev = 0;

// while(temp != 0) {  
//     let currentNumber = temp%10;  
//     rev = (rev * 10) + currentNumber;
//     temp = Math.floor(temp/10);
// }

// if(n === rev){
//     alert('this number is a palindrome');
// } else{
//     alert('this number is not a palindrome');
// }


// Normal 2:

// let purchaseAmount = parseInt(prompt('Enter the purchase amount to find out the price: '));

// if(isNaN(purchaseAmount)){
//   alert("Еnter a number")
// }else if(purchaseAmount < 200){
//     alert(`You pay: ${purchaseAmount}`);
// }else if(purchaseAmount > 200 && purchaseAmount < 300){
//     purchaseAmount -= purchaseAmount * 0.03;
//     alert(`You pay: ${purchaseAmount}`);
// }else if(purchaseAmount >= 300 && purchaseAmount < 500){
//     purchaseAmount -= purchaseAmount * 0.05;
//     alert(`You pay: ${purchaseAmount}`);
// }else if(purchaseAmount > 500){
//     purchaseAmount -= purchaseAmount * 0.07;
//     alert(`You pay: ${purchaseAmount}`);
// }


// Normal 3:

// let numbers = []
//     positivNumber = []
//     negativNumber = []
//     zero = []
//     evenNumber = []
//     oddNumber = []
// do{
//     for(let i = 0; i < 10; i++){
//         numbers[i] = prompt("Enter a number (one at a time)");
//         if(numbers[i] < 0 && numbers[i] !== 0) negativNumber.push(numbers[i]);
//         if(numbers[i] > 0 && numbers[i] !== 0) positivNumber.push(numbers[i]);
//         if(numbers[i] == 0) zero.push(numbers[i]);
//         (numbers[i] % 2 == 0) ? evenNumber.push(numbers[i]) : oddNumber.push(numbers[i]); 
//     } 
//     alert(`You entered the numbers ${numbers} of which: Negative: ${negativNumber.length}, positive: ${positivNumber.length}, zeros: ${zero.length}, even: ${evenNumber.length} not even numbers: ${oddNumber.length}`)         
// }while(numbers.length(10));


// Normal 4:
// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? »
//і так до тих пір, поки користувач натискає OK.

let whichDay = new Date();
let weekDay = (whichDay.getDay());
let agree;
let days = ['неділя','понеділок','вівторок','середа','четвер','п`ятниця','субота']

for(i = 0; i<=7;i++){
    if(weekDay == days.indexOf(days[i])){
        weekDay = days[i];
        do{
            agree = confirm(`Сьогодні ${weekDay}, хочеш побачити наступний день?`);
        }while (agree == false){
            weekDay = days[i+1];
            agree = alert(`Завтра ${weekDay}`);
            break
        }
    } 
}
console.log(weekDay);

    
// Maximum 1:

// let min = 0;
// let max = 100;
// let middle = max;
// let result = false


// while(result == (confirm(`your number ${middle} ?`))) {

//     middle = (Math.floor((min+max)/2));

//     if(confirm(`your number is greater ${middle} ?`)){
//         min = middle;
//     }if (confirm(`your number is less ${middle} ?`)){
//         max = middle
//     }
// }

// alert(`result: ${middle}`);

// Maximum 2:

// for(let i = 2; i <= 9; i++) {
//     for(let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//    }
// }


// Maximum 3:
// Запитай дату (день, місяць, рік) і виведи наступну за нею дату.
//Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

let today = new Date((parseInt(prompt("введіть рік"))), (parseInt(prompt("введіть місяць"))), (parseInt(prompt("введіть день")))) ;
let day = today.valueOf() + (3600 * 24 * 1000);
let nextDate = new Date(day);

nextDay = nextDate.getDate()
nextMonth = nextDate.getMonth()
nextYear = nextDate.getFullYear()
console.log(`Наступна дата: ${nextDay}/${nextMonth}/${nextYear} (дд/мм/рррр)`)




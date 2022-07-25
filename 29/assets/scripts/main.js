// minimum 1:

let userAge = prompt('Enter your age: ');

if (userAge >0 && userAge <=11) {

    alert('You are a child!');

} else if (userAge >=12 && userAge <=17) {

    alert('You are a teenager!');

} else if (userAge >=18 && userAge <=59) {

    alert('You are an adult!');

} else if (userAge >=60) {

    alert('You are a pensioner!');

} else {

    alert( 'Wrong!' );
}


// minimum 2:

let value = prompt('Enter a number from 0 to 9 and you will receive a special symbol that is located on this key:');

if(value == 1) {

    alert('!');

} if(value == 2) {

    alert('@');

} if(value == 3) {

    alert('#');

} if(value == 4) {

    alert('$');

} if(value == 5) {

    alert('%');

} if(value == 6) {

    alert('^');

} if(value == 7) {

    alert('&');

} if(value == 8) {

    alert('*');

} if(value == 9) {

    alert('(');

} if(value == 0) {

    alert(')');

} else {

    alert('there is no such key...')
}

// minimum 3:

let startNumder = +prompt('start');
let endNumder = +prompt('end');
let sum = 0;

for (let i = startNumder; i <= endNumder; i++) {
    
    sum = sum + i;
}

alert(sum);

// minimum 4:

let number1 = prompt('Enter a first positive integer: ');
let number2 = prompt('Enter a second positive integer: ');

while(number1 != number2){
    if(number1 > number2) {
        number1 -= number2;
    }
    else {
        number2 -= number1;
    }
}

alert(number1)


// minimum 5:

const num = prompt('Enter a positive number: ');

console.log(`The factors of ${num} is:`);

for(let i = 1; i <= num; i++) {

    if(num % i == 0) {
        console.log(i);
    }
}
  
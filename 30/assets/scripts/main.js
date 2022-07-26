
// function getSmaller(a,b){

//     if(a<b){
//         return a;

//     } else {
//         return b;
//     }
// }
// getSmaller(6,7);

// function calc (num1, num2, sign) {
//     switch (sign) {
//     case '+':
//         return num1 + num2;
//     case '-':
//         return num1 - num2;
//     case '/':
//         if(num2 === 0) {
//             return 0;
//         }
//         return num1 / num2;
//     case '*':
//         return num1 - num2;
//     default:
//         return null;
// }
// }

// alert(calc(6, 3, '/'))

// const number = parseInt(prompt('Enter an integer: '));

// for(let i = 2; i <= 9; i++) {

//     const result = i * number;

//     console.log(`${number} * ${i} = ${result}`);
// }

// function smaller(a,b){
//     if(a<b){
//         console.log( a);
//     }else{
//         console.log(b);
//     }
// }
// smaller(4,5);
// Max Skvortsov to Everyone (18:39)
// function getSmaller(a, b) {
//     if( a < b) {
//         return a;
//     } else if (a > b) {
//         return b;
//     } else {
//         alert("They are equals");
//     }
// }

// alert(getSmaller(10, 5));
// Антон Сокол to Everyone (18:39)
// function MaxValue(arg1, arg2){
//     if(arg1>arg2){
//         alert (arg1)
//     }else if(arg2>arg1){
//         alert( arg2)
//     }else{
//         alert( 'Ooops...')
//     }
// }
// MaxValue(1,1)
// Max Skvortsov to Everyone (18:40)
// function getSmaller(a, b) {
//     if( a < b) {
//         return a;
//     } else if (a > b) {
//         return b;
//     } else {
        
//         return "They are equals";
//     }
// }

// alert(getSmaller(10, 10));
// Zadorozhnii Vova to Everyone (18:42)
// function smaller(a,b){
//     if(a<=b){
//         return(a);
//     }else{
//         return(b);
//     }
// }
// smaller(4,5);
// Maria Demianchuk to Everyone (18:42)
// function SmallerNum (num1, num2) {
//     if (num1>=num2) {
//         return num2
//     } else {
//         return num1
//     }
// }
// alert(SmallerNum(190,90))
// Vitalii Lymar to Everyone (18:42)
// function number( numb1, numb2){
//     if(numb1 > numb2){
//         retorn("numb1")
//     }
//    if(numb1 < numb2) {
//     retorn("numb2")
//     }
// }
// Anastasia Kustovska 楚月 to Everyone (18:43)
// function min(num1, num2)
// {
//     return Math.min(num1, num2);
// }
// Zadorozhnii Vova to Everyone (18:50)
// function pow(a, b){
//     return Math.pow(a, b);
// }

// alert(pow(2, 3))
// Антон Сокол to Everyone (18:53)
// function Calc(arg1, arg2, arg3) {
//     if (arg3 == '+') {
//         return arg1 + arg2
//     } else if (arg3 == '-') {
//         return arg1 - arg2
//     } else if (arg3 == '*') {
//         return arg1 * arg2
//     } else if (arg3 === '/') {
//         if (arg2 === 0) {
//             return 'Mistake'
//         } else {
//             return arg1 / arg2
//         }
//     }
// }

// let check = prompt()


// alert(Calc(9, 0, check))
// Max Skvortsov to Everyone (18:54)
// function mathPlug(num1, num2, sign) {
//     switch (sign) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '/':
//             if(num2 === 0) {
//                 return 0;
//             } 
//             return num1 + num2;
//         case '*':
//             return num1 - num2;
//         default:
//             return num1 + num2;
//     }
// }

// alert(mathPlug(1, 0, '/'));
// Max Skvortsov to Everyone (18:57)
// function mathPlug(num1, num2, sign) {
//     switch (sign) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '/':
//             if(num2 === 0 && num1 > 0) {
//                 if(num1 > 0){
//                     return Infinity;
//                 } else if (num1 < 0) {
//                     return -Infinity;
//                 }
                
//             } 
//             return num1 + num2;
//         case '*':
//             return num1 - num2;
//         default:
//             return num1 + num2;
//     }
// }

// alert(mathPlug(1, 0, '/'));
// Maria Demianchuk to Everyone (18:59)
// function MathFunction(num1, num2, sign) {
//     switch (sign) {
//         case '*': return num1 * num2
//             break
//         case '/': return num1 / num2
//             break
//         case '+': return num1 + num2
//             break
//         case '-': return num1 - num2
//             break
//     }
// }

// alert(MathFunction(90, 190, '-'))
// Anastasia Kustovska 楚月 to Everyone (19:00)
// function calculate (num1, num2, sign) {
//         switch (sign) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '/':
//             if(num2 === 0) {
//                 return 0;
//             }
//             return num1 / num2;
//         case '*':
//             return num1 - num2;
//         default:
//             return null;
//     }
// }

// alert(calculate(9, 2, '+'))
// Me to Everyone (19:03)
// function calc (num1, num2, sign) {
//     switch (sign) {
//     case '+':
//         return num1 + num2;
//     case '-':
//         return num1 - num2;
//     case '/':
//         if(num2 === 0) {
//             return 0;
//         }
//         return num1 / num2;
//     case '*':
//         return num1 - num2;
//     default:
//         return null;
// }
// }

// alert(calc(6, 3, '/'))
// Vitalii Lymar to Everyone (19:03)
// function twoNumber(a1,a2,res){
//     switch (res){
//         case "+":
//             return a1 + a2;
//         case "-":
//             return a1 - a2;
            
//         case "*":
//             return a1 * a2;
        
//         case "/":
//             return a1 / a2;
         
//     }
// }
// alert(twoNumber(6,3,"/"))
// Zadorozhnii Vova to Everyone (19:03)
// function count(a, b, sign){
//     switch(sign){
//         case '*' :
//             return a * b;
//         case '/':
//             if (b===0){
//                 return 0;
//             }else{
//                 return a / b;
//             }   
//         case '-':
//            return a - b;
//         case '+':
//            return a + b;
//         default:
//             return null;   
//     }
// }

// console.log(count(100,10,'+'));
// Антон Сокол to Everyone (19:20)
// function Table(value){
//     for(let i=2;i<10;i++){
//         document.write(value*i,"\n")
//     }
//     document.write('<br>')
// }
// for(let i=2;i<10;i++){
//     Table(i)
// }
// Max Skvortsov to Everyone (19:21)
// let start = 2;
// let finish = 9;
// let template = `<table border=1 id="1">`;

// function multiply(num) {
//     template += `<tr>`;
//     for(let j = 1; j <= 10; j++){
//         template += `<td>${num} x ${j} = ${num*j}</td>`;
//     }
//     template += `</tr>`;

// }


// window.onload = function () {
//     for (let i = start; i < finish + 1; i++) {
//         multiply(i);
//     }
//     document.body.innerHTML = template;
// }
// Zadorozhnii Vova to Everyone (19:21)
// function calc(a,b){
//     for(let i = a; i <= b; i++) {
//         for(let j = 1; j <= 10; j++) {
//          document.write(`${i} * ${j} = ${i*j} </br>`);
//        }
//     }
// }

// console.log(calc(2,9))
// Anastasia Kustovska 楚月 to Everyone (19:22)
// function multiplication(number) {
// for (let i = 2; i <= 9; i++) {
// console.log(number*i);
// }
// }
// Me to Everyone (19:22)
// const number = parseInt(prompt('Enter an integer: '));

// for(let i = 2; i <= 9; i++) {

//     const result = i * number;

//     console.log(`${number} * ${i} = ${result}`);
// }
// Max Skvortsov to Everyone (19:33)
// let start = 2;
// let finish = 9;
// let template = `<table border=1 id="1">`;

// function addTd(num1, num2, result) {
//     template += `<td>${num1} x ${num2} = ${result}</td>`;    
// }

// function addTr(i) {
//     template += `<tr>`;
//     multiply(i);
//     template += `</tr>`;
// }

// function multiply(num) { 
//     for(let j = 1; j <= 10; j++){
//         addTd(num, j, num*j);
//     }
// }

// window.onload = function () {
//     for (let i = start; i < finish + 1; i++) {
//         addTr(i);
//     }
//     document.body.innerHTML = template;
// }

function sumNum(n1=0, n2=0, n3=0, n4=0, n5=0){
    return(n1+n2+n3+n4+n5);
}
console.log( sum(1,2,3,4,5) )
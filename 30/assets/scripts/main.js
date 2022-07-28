//Minimum:

// 1 Напиши всі можливі варіанти створення функцій:

// 1. Function Declaration: функція в основному потоці коду;
// 2. Function Expression: функція як частина виразу;
// 3. Стрілкові функції.

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.

function numberOfArguments() {

    return (arguments.length)
}
console.log(numberOfArguments(2, 3, 6, 4, 5, 9, 3, 5, 6));

// 3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function returnNum(num1, num2) {
    if (num1 < num2) {
        return -1;
    } if (num1 > num2) {
        return 1;
    } if (num1 === num2) {
        return 0;
    }
}
console.log(returnNum(8, 10));
console.log(returnNum(10, 8));
console.log(returnNum(10, 10));

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(9));

// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function numberConversion(n1, n2, n3) {

    return parseInt((n1.toString() + n2.toString() + n3.toString()));
}

console.log(numberConversion(2, 5, 8));


// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function area(length, width) {
    return length * width;
}

console.log(area(2, 5));

// Normal:

// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function isPerfect(n) {

    sum = 1;

    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            if (i * i != n)
                sum = sum + i + n / i;
            else
                sum = sum + i;
        }
    }

    if (sum == n && n != 1) {
        return console.log(`The number ${n} is perfect`);
    } else {
        return console.log(`The number ${n} is not perfect`);
    }
}

isPerfect(42)
isPerfect(496)

// 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими.
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function valueRangeOfNumbers(a, b) {
    let perf = [];

    for (n = a; n <= b; n++) {
        function isPerfect(n) {
            let sum = 1;
            for (let i = 2; i * i <= n; i++) {
                if (n % i == 0) {
                    if (i * i != n)
                        sum = sum + i + n / i;
                    else
                        sum = sum + i;
                }
            }
            if (sum === n) {
                return true;
            } else {
                return false;
            };
        }
        if (isPerfect(n) == true) {
            perf.push(n);
        }
    }
    return perf;
}

console.log(valueRangeOfNumbers(1, 496));



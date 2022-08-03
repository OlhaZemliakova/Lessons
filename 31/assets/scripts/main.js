// minimum:

//1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, 
// середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
//  1. Метод, який виводить на екран інформацію про автомобіль.
//  2. Додавання ім’я водія у список
//  3. Перевірка водія на наявність його ім’я у списку
//  4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
//Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.


const car = {
    brand: 'Volkswagen',
    model: 'Beetle',
    year: 2000,
    averageSpeed: 100,
    volumeOfFuelTank: 40,
    averageConsumption: 9,
    driver: ['John', 'Kate'],

    showAboutCar() {
        return `Info about car: ${this.brand} ${this.model} ${this.year}`;
    },

    addDriver(name) {
        this.driver.push(name);
    },

    existDriver(name) {
        return this.driver.includes(name);
    },

    avCons(dist) {
        return (dist / 100 * this.averageConsumption)
    },
}

console.log(car.showAboutCar());

car.addDriver('Bob');

console.log(car.driver);

console.log(car.existDriver('Kate'));


// Normal

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

const time = {
    hours: 10,
    minutes: 50,
    seconds: 50,

    // Для виведення часу на екран.
    displayTime(){
        return (`${this.hours}:${this.minutes}:${this.seconds}`);
    },

    // Зміни часу на передану кількість секунд.
    secCount(s){
        if((s + this.seconds) < 60){
            this.seconds += s;
            return (`${this.hours}:${this.minutes}:${this.seconds}`);
        }
        if((s + this.seconds) >= 60){
            this.minutes += Math.floor((this.seconds + s) / 60);
            this.seconds = (this.seconds + s) - (60 * Math.floor((this.seconds + s) / 60));
            
          return (`${this.hours}:${this.minutes}:${this.seconds}`);

        } if(time.minutes>=60){
            time.hours += Math.floor((time.minutes) / 60);
            time.minutes -= (60 * Math.floor(time.minutes / 60));
            return (`${this.hours}:${this.minutes}:${this.seconds}`);
        }
        
    },

    // Зміни часу на передану кількість хвилин.
    minCount(m){
        if((m + this.minutes) < 60){
            this.minutes += m;
            return (`${this.hours}:${this.minutes}:${this.seconds}`);
        }

        if(m + this.minutes >= 60){
            this.hours += Math.floor((m + this.minutes) / 60);
            this.minutes += m - (60 * Math.floor((this.minutes + m) / 60));
            return (`${this.hours}:${this.minutes}:${this.seconds}`);
        }
    },

    // Зміни часу на передану кількість годин.
    hrCount(h){
        if((this.hours + h) < 24){
            return (`${this.hours + h}:${this.minutes}:${this.seconds}`);
        } else{
            return(`Days:${
                Math.floor((this.hours + h)/24)
            } Hours:${
                ((this.hours + h) - (24 * Math.floor((this.hours + h)/24)))
            } Minutes:${
                this.minutes
            } Seconds:${
                this.seconds
            }`)
        }
        
    }
}
    

let addSec = 150;
console.log(`Addsec: ${time.secCount(addSec)}`);

let addMin = 75;
console.log(`addMin: ${time.minCount(addMin)}`);

let addHrs = 23
console.log(`addHrs: ${time.hrCount(addHrs)}`);

// Завдання 1

// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

class Сircle {
    constructor(radius) {
        this.radius = radius;
    }

    // get-властивість, яке повертає радіус кола:

    get CircleRadius() {
        return this._radius;
    }

    // set-властивість, що встановлює радіус кола:

    set CircleRadius(radius) {
        this._radius = radius;
    }

    // get-властивість, яке повертає діаметр кола:

    get circleDiameter() {
        return (this._radius * 2)
    }

    // метод, що обчислює площу кола:

    areaOfCircle(radius) {
        return (Math.PI * this.radius * this.radius);
    }

    // метод, що обчислює довжину кола:

    circleLength(radius) {
        return (2 * Math.PI * radius);
    }
}

let circle = new Сircle(15);

console.log(`circle: ${circle.radius}`);

console.log(`get CircleRadius(): ${circle.CircleRadius}`);

console.log(`set CircleRadius(): ${circle.CircleRadius = 14}`);

console.log(`get CircleDiameter(): ${circle.circleDiameter}`);

console.log(`areaOfCircle: ${ circle.areaOfCircle(10).toFixed(1) }`);

console.log(`areaOfCircle: ${ circle.circleLength(10).toFixed(1) }`);
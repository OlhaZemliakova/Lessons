// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту,
// кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// 1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// 2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

let shopingList = [
    {
        productName: 'bread',
        quantity: 2,
        isItBuy: false,
        priceForOne: 4,
        sum: 8,
    },
    {
        productName: 'butter',
        quantity: 3,
        isItBuy: true,
        priceForOne: 6,
        sum: 18,
    },
    {
        productName: 'coffe',
        quantity: 1,
        isItBuy: true,
        priceForOne: 15,
        sum: 15,
    },
    {
        productName: 'avocado',
        quantity: 4,
        isItBuy: false,
        priceForOne: 6,
        sum: 24,
    },
];

// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

shopingList.sort(function (a, b) {
    if (a.isItBuy > b.isItBuy) {
      return 1;
    }
    if (a.isItBuy < b.isItBuy) {
      return -1;
    }
    return 0;
});
console.log(shopingList)

//Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

function done(array, productType) {
    const item = array.find(item => item.productType == productType);
    item.isItBuy = true;
    return array
}
console.log(done(toBuy, 'milk'))

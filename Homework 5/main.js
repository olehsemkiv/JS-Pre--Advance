// // Task 1

function mySum() {
    let a = 0;
    return function sum(num) {
        a += num;
        console.log(`Наше число: ${a}`);
    }
}

let fn = mySum();
fn(10);
fn(20);
fn(50);
fn(100);

// Task 2

const MyModule = (function () {
    let cash = 1000;
    let countBeer = 100;
    let priceBeer = 30; // ціна
    let countWyne = 50;
    let priceWyne = 100; // ціна
    let countPepsi = 80;
    let pricePepsi = 20; // ціна

    function checkInfo() {
        return `
        Баланс: ${cash}
        Пива залишилося: ${countBeer}
        Вина залишилося: ${countWyne}
        Пепсі залишилося: ${countPepsi} `
    }

    function sell(beer, wyne, pepsi) {
        if (beer <= countBeer || wyne <= countWyne || pepsi <= countPepsi) {
            countBeer -= beer;
            countWyne -= wyne;
            countPepsi -= pepsi;
            cash += (beer * priceBeer) + (wyne * priceWyne) + (pepsi * pricePepsi);
            return `Чек: ${(beer * priceBeer) + (wyne * priceWyne) + (pepsi * pricePepsi)} грн.`
        }
        return `Не достатньо товару`
    }

    return {
        check: checkInfo,
        sell: sell
    }
}());

console.log(MyModule.check());
console.log(MyModule.sell(5, 5, 5));
console.log(MyModule.check());
console.log(MyModule.sell(10, 10, 10));
console.log(MyModule.check());
console.log(MyModule.sell(85, 35, 65));
console.log(MyModule.check());
console.log(MyModule.sell(1, 1, 1));
console.log(MyModule.check());

function CoffeeMake() {}

CoffeeMake.prototype.on = function () {
    console.log('Кавоварка працює');
}

CoffeeMake.prototype.off = function () {
    console.log('Кавоварка вимкнена');
}

function First_Machine() {}

function Second_Machine() {}


First_Machine.prototype = Object.create(CoffeeMake.prototype);
Second_Machine.prototype = Object.create(CoffeeMake.prototype);

First_Machine.prototype.make_late = function () {
    console.log('Приготовлена Лате');
}
Second_Machine.prototype.make_espresso = function () {
    console.log('Приготовлена Еспресо');
}

let first = new First_Machine();
let second = new Second_Machine();

first.off()
first.on()
first.make_late()
second.off()
second.on()
second.make_espresso()
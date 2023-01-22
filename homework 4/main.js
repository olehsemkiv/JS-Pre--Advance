// Task 1

class Worker {
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days
    }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);

console.log(worker.firstName); // виведе 'Ivan'

console.log(worker.secondName); //виведе 'Ivanov'

console.log(worker.rate); //виведе 10

console.log(worker.days); //виведе 31

console.log(worker.getSalary()); //виведе 310 - тобто 10*31

// Task 2

class MyString extends String {
    reverse(str1) {
        console.log(str1.split('').reverse().join(''));
    }
    ucFirst(str2) {
        console.log(str2[0].toUpperCase() + str2.slice(1));
    }
    ucWords(str3) {
        let res = ''
        let string = str3.split(' ');
        for (let i = 0; i < string.length; i++) {
            res += string[i][0].toUpperCase() + string[i].slice(1) + ' ';

        }
        console.log(res);
    }

}

let str = new MyString();
str.reverse('ivan');
str.ucFirst('arsenal');
str.ucWords('arsenal arsenal arsenal');




// // Task 3

class CoffeeMake {
    on() {
        console.log('Кавоварка працює');
    }
    off() {
        console.log('Кавоварка вимкнена');
    }
}

class First_Machine extends CoffeeMake {
    make_late() {
        console.log('Приготовлення Лате');
    }
}

class Second_Machine extends CoffeeMake {
    make_espresso() {
        console.log('Приготовлення Еспресо');
    }
}

let cf = new First_Machine();
let cf1 = new Second_Machine();

cf.off();
cf.on();
cf.make_late();

cf1.off();
cf1.on();
cf1.make_espresso();
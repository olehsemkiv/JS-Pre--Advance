// Task 1

// let city: string;
// city = 'Kyiv';
// city = 'Lviv';
// let address: string = city;
// console.log(address);

// Task 2

// let num: number = prompt('Enter any number');

// num !=0
//     ? (num%2==0 
//         ? console.log('Парне число')
//         : console.log('Непарне число')

//     )
//     : console.log('Ви ввели 0');

// Task 3

// function maxElem(...arr: Array<number>) {
//     let max: number = Math.max(...arr)
//     console.log(Math.max(max));


// }

// maxElem(12, 3, 4, 5, 66)

// Task 4

// function getSqrt(elem: any) {
//     if (typeof elem == 'number') {
//         if (elem > 0) {
//             console.log(Math.sqrt(elem));
//         }
//         else if (elem < 0 || elem == 0) {
//             console.log("Число менше або дорівню нулю");
//         }
//     } else {
//         console.log("Ви ввели не число");
//     }
// }

// getSqrt(-7);
// getSqrt(9);
// getSqrt('dasdasd');
// getSqrt(0);

// Task 5


let addBTN = document.querySelector('.btn_add') as HTMLButtonElement
let resetBTN = document.querySelector('.btn_reset') as HTMLButtonElement
let badword_pull: string[] = [];
let badword = document.querySelector('.input_badwords') as HTMLInputElement
let words = document.querySelector('.arr_badwords') as HTMLSpanElement
let cenzoure = document.querySelector('.btn_cenzour') as HTMLButtonElement
let text_area = document.querySelector('.text_area') as HTMLTextAreaElement

addBTN.addEventListener('click', () => {
    badword.value == ''
        ? alert("Введіть слово!")
        : badword_pull.push(badword.value),
        words.textContent += badword.value + ',',
        badword.value = ''
})

cenzoure.addEventListener('click', () => {
    let text: string = text_area.value;
    let new_text = text.split(' ');
    for (let i = 0; i < new_text.length; i++) {
        for (let j = 0; j < badword_pull.length; j++) {
            if (new_text[i] == badword_pull[j]) {
                let a: string = '';
                for (let q = 0; q < new_text[i].length; q++) {
                    a += '*';
                }
                new_text[i] = a;
            }
        }

    }
    text_area.value = '';
    for (let r = 0; r < new_text.length; r++) {
        text_area.value += new_text[r] + ' ';
    }
})

resetBTN?.addEventListener('click', () => {
    text_area.value = '';
    badword_pull = [];
    words.textContent = '';
    badword.value = '';
})


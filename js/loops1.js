console.clear();
const numbers = [11, 22, 33, 44];

console.log('####### FOR');
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(`${i}) ${number}`);
}

console.log('####### FOR (su`while`intas)');
let iFW = 0;
for (; iFW < numbers.length;) {
    const number = numbers[iFW];
    console.log(`${iFW++}) ${number}`);
}

console.log('####### FOR (su`while`intas + break)');
let iFWtrue = 0;
for (; true;) {
    const number = numbers[iFWtrue];
    console.log(`${iFWtrue++}) ${number}`);
    if (iFWtrue >= numbers.length) {
        break;
    }
}

console.log('####### FOR-OF');
let iOf = 0;
for (const number of numbers) {
    console.log(`${iOf++}) ${number}`);
}

console.log('####### WHILE');
let iWhile = 0;
while (iWhile < numbers.length) {
    const number = numbers[iWhile];
    console.log(`${iWhile++}) ${number}`);
}

console.log('####### WHILE + break');
let iWhileBreak = 0;
while (true) {
    const number = numbers[iWhileBreak];
    console.log(`${iWhileBreak++}) ${number}`);
    if (iWhileBreak >= numbers.length) {
        break;
    }
}

console.log('####### DO-WHILE');
let iDoWhile = 0;
do {
    const number = numbers[iDoWhile];
    console.log(`${iDoWhile++}) ${number}`);
} while (iDoWhile < numbers.length);

console.log('####### FOREACH');
numbers.forEach((number, i, arr) => console.log(`${i}) ${number}`, arr));

console.log('####### FOREACH + function');
function forEachCallback(number, i) {
    console.log(`${i}) ${number}`);
}
const forEachCallbackArrow = (number, i) => console.log(`${i}) ${number}`);

numbers.forEach(forEachCallback);
numbers.forEach(forEachCallbackArrow);

console.log('####### MAP');
console.log('-- numbers');
// grazina nauja masyva su modifikuotais duomenimis
const doubleNumbers = numbers.map(n => n * 2);
console.log(doubleNumbers);
console.log(numbers);

console.log('-- strings');
const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const firstNameLetters = names.map(name => name[0]);
console.log(names);
console.log(firstNameLetters);

const firstNameLettersFor = [];
for (let i = 0; i < names.length; i++) {
    const name = names[i];
    firstNameLettersFor.push(name[0]);
}
console.log(firstNameLettersFor);

console.log('####### FILTER');
// grazina nauja masyva su atfiltruotais
// (tais, kuriu tau reikia) duomenimis
console.log('-- numbers');
const oddNumbers = numbers.filter(n => n % 2 !== 0);
const evenNumbers = numbers.filter(n => n % 2 === 0);

console.log(numbers);
console.log('odd:', oddNumbers);
console.log('even:', evenNumbers);
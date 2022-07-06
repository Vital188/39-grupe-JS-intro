console.clear();
/*
NUMBERS
normalus:
    - sveikieji
    - desimtainiai
    - teigiami / neigiami
ne normalus:
    - Infinity / -Infinity
    - NaN (not-a-number)
Kintamuju iniciavimas:
- const: reiksme negali buti pakeista (default)
- let: leidziam keisti reiksme
- var: nenaudoti, jei nenori problemu
*/

const metai = 202200000;
console.log(metai);

let PI = 3.1415;
console.log(PI);

const minus = -77;
console.log(minus);

const minusDec = -77.77;
console.log(minusDec);

console.log(metai);
console.log(PI);
console.log(minus);
console.log(minusDec);
console.log(metai);
console.log(PI);
console.log(minus);

console.log('----------------');

let pinigine = 0;
console.log('Pinigine:', pinigine);

pinigine = 5;
console.log('Pinigine:', pinigine);

pinigine = 7;
console.log('Pinigine:', pinigine);

pinigine = 3;
console.log('Pinigine:', pinigine);

pinigine = -333;
console.log('Pinigine:', pinigine);

console.log('------------------');

const teigiamaBegalybe = Infinity;
console.log(teigiamaBegalybe);

const neigiamaBegalybe = -Infinity;
console.log(neigiamaBegalybe);

const a = 7;
const b = 5;

console.log('suma');
const suma = a + b;
console.log(a, b, a + b, suma);

console.log('skirtumas');
const skirtumas = a - b;
console.log(a, b, a - b, skirtumas);

console.log('sandauga');
const sandauga = a * b;
console.log(a, b, a * b, sandauga);

console.log('dalmuo');
const dalmuo = a / b;
console.log(a, b, a / b, dalmuo);

console.log('liekana');
const liekana = a % b;
console.log(a, b, a % b, liekana);

console.log(5, 2, 5 % 2);
console.log(10, 2, 10 % 2);
console.log(10, 3, 10 % 3);
console.log(10, 4, 10 % 4);
console.log(10, 5, 10 % 5);
console.log(10, 6, 10 % 6);
console.log(10, 7, 10 % 7);
console.log(10, 8, 10 % 8);
console.log(10, 9, 10 % 9);
console.log(10, 10, 10 % 10);

console.log('kelimas laipsniu');
const laipsnis = a ** b;
console.log(a, b, a ** b, laipsnis);
console.log(5, 2, 5 ** 2);
console.log(3, 2, 3 ** 2);
console.log(3, 2, 3 ** 2);

console.log('-------');
console.log(2, 0, 2 ** 0);
console.log(2, 1, 2 ** 1);
console.log(2, 2, 2 ** 2);
console.log(2, 3, 2 ** 3);
console.log(2, 4, 2 ** 4);
console.log(2, 5, 2 ** 5);
console.log(2, 6, 2 ** 6);
console.log(2, 7, 2 ** 7);
console.log(2, 8, 2 ** 8);
console.log(2, 9, 2 ** 9);
console.log(2, 10, 2 ** 10);

console.clear();

let t = 1024;
console.log(t);

t = t * 2;
console.log(t);

t = t * 2;
console.log(t);

t = t * 2;
console.log(t);

t = t * 2;
console.log(t);

t = t * 2;
console.log(t);

console.log(10 / 0);
console.log(-10 / 0);
console.log(3.14 / 0);
console.log(-3.14 / 0);
console.log(Infinity / 0);
console.log(-Infinity / 0);

console.log(5845 / Infinity);
console.log(-5845 / Infinity);
console.log(-5845 / -Infinity);

console.log('Nesamones: NaN');
console.log(0 / 0);
console.log(-0 / 0);

console.log(Infinity / Infinity);
console.log(-Infinity / Infinity);

console.clear();

let silense = 1;
console.log(silense);
silense += 4;
console.log('+= 4 ->', silense);
silense *= 6;
console.log('*= 6 ->', silense);
silense -= 10;
console.log('-= 10 ->', silense);
silense /= 4;
console.log('/= 4 ->', silense);
silense %= 3;
console.log('%= 3 ->', silense);
silense **= 3;
console.log('**= 3 ->', silense);

let i = 1;
i = i + 1;
console.log(i);
i += 1;
console.log(i);
i++;
console.log(i);
++i;
console.log(i);
i++;
console.log(i);
++i;
console.log(i);

let j = 1;
j = j - 1;
console.log(j);
j -= 1;
console.log(j);
j--;
console.log(j);
--j;
console.log(j);
j--;
console.log(j);
--j;
console.log(j);

console.clear();
let m = 0;
console.log(m++);
console.log(m++);
console.log(m++);
console.log(m++);
console.log(m++);
console.log(m++);
console.log(m);

let n = 100;
console.log(++n);
console.log(++n);
console.log(++n);
console.log(++n);
console.log(++n);
console.log(++n);
console.log(n);
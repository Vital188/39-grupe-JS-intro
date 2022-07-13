console.clear();

const a = 7;
const b = 5;

let max = 0;

if (a > b) {
    max = a;
} else {
    max = b;
}

console.log('max:', max);

const max2 = a > b ? a : b;
console.log('max:', max2);

console.log(1 > 2 ? 3 : 4);
console.log(1 > 2 ? 3 ? 4 : 5 : 6);
console.log(1 < 2 ? 0 ? 4 : 5 : 6);

/*
1 > 2 ? 3 ? 4 : 5 : 6
1 > 2 
? 3
? 4
: 5
: 6
1 < 2 
? 3
? 4
: 5
: 6
*/

if (1 > 2) {
    if (3) {
        console.log(4);
    } else {
        console.log(5);
    }
} else {
    console.log(6);
}



console.log(0 ? 1 ? 2 : 3 : 4 ? 5 : 6);


// 2
// 6+++
// undefined (error)
// 5

/*
0 ? 1 ? 2 : 3 : 4 ? 5 : 6
0 
    ? 1 
        ? 2 
        : 3
    : 4 
        ? 5 
        : 6
*/
console.clear();

const arLyja = false;
const arSviecia = false;

if (arLyja) {
    if (arSviecia) {
        console.log(1);
    } else {
        console.log(2);
    }
} else {
    if (arSviecia) {
        console.log(3);
    } else {
        console.log(4);
    }
}

const oras = arLyja
    ? arSviecia
        ? 1 : 2
    : arSviecia
        ? 3 : 4;
console.log(oras);

console.log('-----------');
function suma(a = 0, b = 0) {
    return a + b;
}

console.log(suma(7, 5));
console.log(suma(7));
console.log(suma());

console.log('-----------');
function atimtis(a, b) {
    a = a ? a : 0;
    b = b ? b : 0;
    return a - b;
}

console.log(atimtis(7, 5));
console.log(atimtis(7));
console.log(atimtis());
console.log(atimtis(0, 5));
console.log(atimtis(7, 0));

console.log('-----------');
console.log(5 ? true : false);
console.log(0 ? true : false);
console.log(-8 ? true : false);
console.log('' ? true : false);
console.log(' ' ? true : false);
console.log([] ? true : false);
console.log(function () { } ? true : false);

console.log('-----------');
function daugyba(a, b) {
    a = a ?? 1;
    b = b ?? 1;
    return a * b;
}

console.log(daugyba(7, 5));
console.log(daugyba(7));
console.log(daugyba());
console.log(daugyba(1, 5));
console.log(daugyba(7, 1));

console.log('-----------');
function dalyba(a, b) {
    a = a || 1;
    b = b || 1;
    return a / b;
}

console.log(dalyba(7, 5));
console.log(dalyba(7));
console.log(dalyba());
console.log(dalyba(1, 5));
console.log(dalyba(7, 1));
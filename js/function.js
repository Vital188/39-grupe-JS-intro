console.clear();

const petras = [2, 3, 4, 5];
const maryte = [4, 5, 6, 7, 8];
const jonas = [10, 9, 8];
const ona = [1, 10, 2, 9, 3, 8, 4, 7];

function pazymiuVidurkis(pazymiai) {
    let suma = 0;
    for (let i = 0; i < pazymiai.length; i++) {
        suma += pazymiai[i];
    }
    return suma / pazymiai.length;
}

console.log('Petras:', pazymiuVidurkis(petras));
console.log('Maryte:', pazymiuVidurkis(maryte));
console.log('Jonas:', pazymiuVidurkis(jonas));
console.log('Ona:', pazymiuVidurkis(ona));

console.clear()

function suma(a, b) {
    return a + b;
}

console.log(`7+5 = ${suma(7, 5)}`);


function sumap (a,b,c) {
    return a+b+c;
}

console.log(`6+5+4 = ${sumap(6, 5, 4)}`);
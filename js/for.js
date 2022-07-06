
console.clear();

const marks = [10, 2, 8, 4, 6];

let suma = 0;

for (let i = 0; i < 5; i++) {
    const mark = marks[i];
    suma += mark;
}

console.log('suma:', suma);
console.log('kiekis:', marks.length);
console.log('vidurkis:', suma / marks.length);

const people = ['Petras', 'Maryte', 'Jonas', 'Ona'];

for (let i = 0; i < people.length; i++) {
    const name = people[i];
    const labas = 'Labas, as ' + name + '!';
    console.log(labas);
}

console.log('------------------');

const paraidziui = 'Paraidziui';
console.log(paraidziui);

for (let i = 0; i < paraidziui.length; i++) {
    const simbolis = paraidziui[i];
    console.log(simbolis);
}


const labas = 'Labas rytas Lietuva!';
let labasNaujas = '';
console.log(labas);

for (let i = 0; i < labas.length; i++) {
    const simbolis = labas[i];
    labasNaujas += simbolis;
    console.log(simbolis, labasNaujas);
}
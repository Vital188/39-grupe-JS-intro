console.clear();

// const people = [
//     ['Petras', 99, true, []],
//     ['Maryte', 87, false, ['Juozas']],
//     ['Jonas', 66, false, ['Aldona', 'Gabrielius']],
//     ['Ona', 50, true, []],
// ];

// const personIndex = 0;

// const personName = people[personIndex][0];
// const personAge = people[personIndex][1];
// const personIsMarried = people[personIndex][2];
// const personChildren = people[personIndex][3];
// const firstChildName = people[personIndex][3][0];

// console.log(personName, personAge, personIsMarried);
// console.log(personChildren);
// console.log(firstChildName);


const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
}

console.log(person);

const name = person['name'];
const age = person['age'];
const isMarried = person['isMarried'];

console.log(name);
console.log(age);
console.log(isMarried);

const name2 = person.name;
const age2 = person.age;
const isMarried2 = person.isMarried;

console.log(name2);
console.log(age2);
console.log(isMarried2);

const students = [
    {
        name: 'Petras',
        age: 99,
    },
    {
        name: 'Maryte',
        age: 87,
    },
    {
        name: 'Jonas',
        age: 66,
    },
    {
        name: 'Ona',
        age: 50,
    },
];
console.log(students);

// Sveiki, as [vardas] ir man [amzius] metu.

for (const student of students) {
    const labas = `Sveiki, as ${student.name} ir man ${student.age} metu.`;
    console.log(labas);
}

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const labas = `Sveiki, as ${student.name} ir man ${student.age} metu.`;
    console.log(labas);
}

console.clear();

const zmogus = {
    akiuSpalva: 'red',
    profesija: 'programeris',
    ugis: 200,
    galva: true,
    arklys: false,
}

console.log(zmogus);

// ka nori suzinoti vartotojas
const interesas = 'akiuSpalva';

console.log(`${interesas}: ${zmogus[interesas]}`);

zmogus.drabuziai = 'geri drabuziai 👍';
console.log(zmogus);
console.log(zmogus.drabuziai);

zmogus.masina = 'su varykliu';
console.log(zmogus);
console.log(zmogus.masina);

console.log('Zmogaus objekta sudarantys raktazodziai:');
const zmogusKeys = Object.keys(zmogus);
console.log(zmogusKeys);

console.log(Object.keys({}));
console.log(Object.keys({ a: 1 }));
console.log(Object.keys({ a: 1, b: 2 }));

console.clear();

const uodegos = ['neturi', 'trumpa', 'riesta', 'ilga'];
const gyvunas = {
    rusis: 'kate',
    kraujas: 'saltas',
    spalva: 'geltonas',
    liezuvis: 20,
    liezuvioMatavimoVienetas: 'cm',
    uodega: uodegos[2],
    key: 'raktas...',
}

console.log(gyvunas);

console.log('----------');
const gyvunoKeys = Object.keys(gyvunas);
for (const key of gyvunoKeys) {
    console.log(`${key}: ${gyvunas[key]}`);
}

console.log('----------');
for (const key of Object.keys(gyvunas)) {
    console.log(`${key}: ${gyvunas[key]}`);
}

console.log('----------');
let keyIndex = 0;
for (const key in gyvunas) {
    console.log(`${key}: ${gyvunas[key]}`);
    gyvunas['raktas' + keyIndex++] = 5;
}

console.log(gyvunas);

console.clear();

const user = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    password: 'nesakysiu',
}

console.log(user);

delete user.password;
console.log(user);
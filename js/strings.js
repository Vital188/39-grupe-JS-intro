console.clear();
/*
STRINGS
tekstas - simboliu kratinys/sarasas/masyvas
teksto iniciavimas:
- dvygubos kabutes (")
- viengubos kabutes (')
- backtick (apostrofas) (`)
*/

const name = 'Petras';
console.log(name);

const lastname = "Petraitis";
console.log(lastname);

const sentense = "Labas rytas Lietuva! 🟨🟩🟥";
console.log(sentense);

const p = "Labas rytas, labas rytas, labas rytas, labas rytas, labas rytas, labas rytas, labas rytas, labas rytas, labas rytas, labas rytas, labas rytas, labas rytas, labas rytas, labas rytas, labas rytas, labas rytas, labas rytas, labas rytas, labas rytas. Ka tu?";
console.log(p);

const s1 = "Vienguba kabute(').";
console.log(s1);

const s2 = 'Dvyguba kabute(").';
console.log(s2);

const s12_1 = 'Vienguba kabute(\') ir dvyguba kabute(\").';
console.log(s12_1);
const s12_2 = "Vienguba kabute(\') ir dvyguba kabute(\").";
console.log(s12_2);

const slash1 = 'Slash (\\).';
console.log(slash1);

const slash2 = "Slash (\\\\).";
console.log(slash2);

const enter = 'Labas\r\n\
rytas\r\n\
Lietuva.';
console.log(enter);

const back1 = `Vienguba kabute(').`;
console.log(back1);

const back2 = `Dviguba kabute(").`;
console.log(back2);

const back12 = `Vienguba kabute(') ir dvyguba kabute(").`;
console.log(back12);

const back123 = `Vienguba ('), dviguba (") ir backtick (\`) kabutes.`;
console.log(back123);

const backEnter = `Labas
rytas
Lietuva.`;
console.log(backEnter);

console.clear();

// Labas, as Krabas Patis.
// Labas, as Vaikas Bosas.

const firstname1 = 'Krabas';
const lastname1 = 'Patis';

const firstname2 = 'Vaikas';
const lastname2 = 'Bosas';

const labas1_1 = 'Labas, as ' + firstname1 + ' ' + lastname1 + '.';
console.log(labas1_1);

const labas1_2 = "Labas, as " + firstname1 + " " + lastname1 + ".";
console.log(labas1_1);

const labas2_1 = 'Labas, as ' + firstname2 + ' ' + lastname2 + '.';
console.log(labas2_1);

const labas2_2 = "Labas, as " + firstname2 + " " + lastname2 + ".";
console.log(labas2_1);

console.log('--------------');
const labas1_b = `Labas, as ${firstname1} ${lastname1}.`;
console.log(labas1_b);

const labas2_b = `Labas, as ${firstname2} ${lastname2}.`;
console.log(labas2_b);

console.log('Labas, as ${firstname1} ${lastname1}.');

const a = 7;
const b = 5;

console.log(`${a} + ${b} = ${a + b}`);
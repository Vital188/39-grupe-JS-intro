console.clear();

/*
IF - reiksmiu palyginimas
palyginimo operatoriai:
visi: >, <, <=, >=, ==, !=, ===, !==
naudotini: >, <, <=, >=, ===, !==
nenaudotini: ==, !=
sablonai:
if () {}
if () {} else {}
if () {} else if {} ... else if {}
if () {} else if {} ... else if {} else {}
*/

const a = '5';
const b = 5;

if (a === b) {
    console.log('A lygu B');
} else {
    console.log('A nelygu B');
}

const eyeColor = 'raudona';

if (eyeColor === 'zalia') {
    console.log('Zaliaakis');
} else if (eyeColor === 'melyna') {
    console.log('Melynakis');
} else if (eyeColor === 'ruda') {
    console.log('Rudaakis');
} else {
    console.log('Nezinoma akiu spalva');
}

if ('aaa' === 'Aaa') {
    console.log(true);
} else {
    console.log(false);
}

const day = 8;

// kodo nestinimas
if (day === 1) {
    console.log('pirmadienis');
} else {
    if (day === 2) {
        console.log('antradienis');
    } else {
        if (day === 3) {
            console.log('treciadienis');
        } else {
            if (day === 4) {
                console.log('ketvirtadienis');
            } else {
                if (day === 5) {
                    console.log('penktadienis');
                } else {
                    if (day === 6) {
                        console.log('sestadienis');
                    } else {
                        if (day === 7) {
                            console.log('sekmadienis');
                        } else {
                            console.log('Tokia diena savaiteje neegzistuoja');
                        }
                    }
                }
            }
        }
    }
}


const nuoKadaSilta = 20;
const dabartineTemp = 39;
const yraKrituliai = false;

if (yraKrituliai) {
    if (dabartineTemp > nuoKadaSilta) {
        console.log('Einam nuogi');
    } else {
        console.log('Sketis ir striuke');
    }
} else {
    if (dabartineTemp > nuoKadaSilta) {
        console.log('Alaus');
    } else {
        console.log('Degtine');
    }
}
/*
SWITCH
*/

console.clear();

const day = 4;

switch (day) {
    case 1:
        console.log('pirmadienis');
        break;

    case 2:
        console.log('antradienis');
        console.log('antradienis');
        break;

    case 3:
        console.log('treciadienis');
        console.log('treciadienis');
        console.log('treciadienis');
        break;

    case 4:
        console.log('ketvirtadienis');
        console.log('ketvirtadienis');
        console.log('ketvirtadienis');
        console.log('ketvirtadienis');
        break;

    case 5:
        console.log('pektadienis');
        console.log('pektadienis');
        console.log('pektadienis');
        console.log('pektadienis');
        console.log('pektadienis');
        break;

    case 6:
        console.log('sestadienis');
        console.log('sestadienis');
        console.log('sestadienis');
        console.log('sestadienis');
        console.log('sestadienis');
        console.log('sestadienis');
        break;

    case 7:
        console.log('sekmadienis');
        console.log('sekmadienis');
        console.log('sekmadienis');
        console.log('sekmadienis');
        console.log('sekmadienis');
        console.log('sekmadienis');
        console.log('sekmadienis');
        break;

    default:
        console.log('tokios dienos savaiteje nera');
        break;
}

console.log('--------------------');

const weekday = 3;

switch (weekday) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7:
        console.log('savaitgalis');
        break;

    default:
        console.log('tokios dienos savaiteje nera');
        break;
}

console.log('--------------------');

// 6g
const stotele = 'Parko ziedas 1';

switch (stotele) {
    case 'Parko ziedas 1':
        console.log('Parko ziedas 1');

    case 'Geniu 1':
        console.log('Geniu 1');

    case 'Tremtiniu 1':
        console.log('Tremtiniu 1');

    case 'Rudens 1':
        console.log('Rudens 1');

    case 'Mindaugo tiltas':
        console.log('Mindaugo tiltas');

    case 'Zaliasis tiltas':
        console.log('Zaliasis tiltas');
        break;

    case 'Lvovo':
        console.log('Lvovo');

    case 'Tuskulenai':
        console.log('Tuskulenai');

    case 'Vasaros':
        console.log('Vasaros');

    case 'Rudens 2':
        console.log('Rudens 2');

    case 'Tremtiniu 2':
        console.log('Tremtiniu 2');

    case 'Geniu 2':
        console.log('Geniu 2');

    case 'Parko ziedas 2':
        console.log('Parko ziedas 2');
        break;
}

console.log('--------------------');

console.log('Duonos kepimas:');
console.log('--------------------');
const etapas = 5;

switch (etapas) {
    case 1:
        console.log('Pasiimti miltus');

    case 2:
        console.log('Pasiimti kiausinius');

    case 3:
        console.log('Pasiimti mieliu');

    case 4:
        console.log('Uzminkome tesla');

    case 5:
        console.log('Suformuojame');

    case 6:
        console.log('Pasauname i krosni');

    case 7:
        console.log('Kepame');

    case 8:
        console.log('Istraukiame');

    case 9:
        console.log('Valgome');
        break;

    default:
        console.log('Toks etapas nenumatytas');
        break;
}
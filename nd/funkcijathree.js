console.clear();

function numSize(number) {
    if (typeof number !== 'number'
        || !isFinite(number)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    const allowedSymbols = '0123456789';
    const numberAsString = '' + number;
    let size = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        const symbol = numberAsString[i];
        if (allowedSymbols.indexOf(symbol) >= 0) {
            size++;
        }
    }

    return size;
}

console.log(numSize(true), '->', 'ERROR');
console.log(numSize('asd'), '->', 'ERROR');
console.log(numSize(NaN), '->', 'ERROR');
console.log(numSize(Infinity), '->', 'ERROR');
console.log(numSize(-Infinity), '->', 'ERROR');
console.log(numSize(), '->', 'ERROR');
console.log(numSize(null), '->', 'ERROR');

console.log(numSize(5), '->', 1);
console.log(numSize(781), '->', 3);
console.log(numSize(37060123456), '->', 11);
console.log(numSize(-5), '->', 1);
console.log(numSize(-781), '->', 3);
console.log(numSize(-37060123456), '->', 11);
console.log(numSize(3.14), '->', 3);
console.log(numSize(-3.14), '->', 3);

console.log(numSize(5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555), '->', 205);
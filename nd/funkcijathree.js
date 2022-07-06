console.clear();

function numSizesis(number) {
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

console.log(numSizesis(true), '->', 'ERROR');
console.log(numSizesis('asd'), '->', 'ERROR');
console.log(numSizesis(NaN), '->', 'ERROR');
console.log(numSizesis(Infinity), '->', 'ERROR');
console.log(numSizesis(-Infinity), '->', 'ERROR');
console.log(numSizesis(), '->', 'ERROR');
console.log(numSizesis(null), '->', 'ERROR');

console.log(numSizesis(5), '->', 1);
console.log(numSizesis(781), '->', 3);
console.log(numSizesis(37060123456), '->', 11);
console.log(numSizesis(-5), '->', 1);
console.log(numSizesis(-781), '->', 3);
console.log(numSizesis(-37060123456), '->', 11);
console.log(numSizesis(3.14), '->', 3);
console.log(numSizesis(-3.14), '->', 3);

console.log(numSizesis(555555555555555555555), '->', 205);
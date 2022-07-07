console.clear();

function numSizesis(number) {
    if (typeof number !== 'number'
        || !isFinite(number)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    const allowedSymbols = '0123456789';
    const numberAsString = ' ' + number;
    let size = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        const symbol = numberAsString[i];
        if (allowedSymbols.indexOf(symbol) >= 0) {
            size++;
        }
    }

    return size;
}

//console.log(numSizes(true), '->', 'ERROR');
//console.log(numSizes('asd'), '->', 'ERROR');
//console.log(numSizes(NaN), '->', 'ERROR');
//console.log(numSizes(Infinity), '->', 'ERROR');
//console.log(numSizes(-Infinity), '->', 'ERROR');
//console.log(numSizes(), '->', 'ERROR');
//console.log(numSizes(null), '->', 'ERROR');//

//console.log(numSizesi(5), '->', 1);
//console.log(numSizesi(781), '->', 3);
//console.log(numSizesi(37060123456), '->', 11);
//console.log(numSizesi(-5), '->', 1);
//console.log(numSizesi(-781), '->', 3);
//console.log(numSizesi(-37060123456), '->', 11);
//console.log(numSizesi(3.14), '->', 3);
//console.log(numSizesi(-3.14), '->', 3);

console.log(numSizesis(9999999999), '->', 205);
console.clear();

function big(list) {
    if (!Array.isArray(list)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if (list.length === 0) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }

    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (typeof number === 'number'
            && isFinite(number)
            && number > biggest) {
            biggest = number;
        }
    }

    if (biggest === Infinity) {
        return 'Masyve nerasta nei vieno normalaus skaiciaus.';
    }

    return biggest;
}

console.log(big('pomidoras'), '->', 'ERROR');
console.log(big([]), '->', 'ERROR');
console.log(big(5), '->', 'ERROR');
console.log(big(true), '->', 'ERROR');
console.log(big(false), '->', 'ERROR');
console.log(big(undefined), '->', 'ERROR');
console.log(big(null), '->', 'ERROR');
console.log(big({}), '->', 'ERROR');
console.log(big([NaN, NaN, NaN, NaN, NaN]), '->', 'ERROR');
console.log(big([Infinity, Infinity, Infinity]), '->', 'ERROR');big
console.log(big([1]), '->', 1);
console.log(big([3]), '->', 3);
console.log(big([1, 2, 3]), '->', 3);
console.log(big([-5, 78, 14, 0, 18]), '->', 78);
console.log(big([69, 69, 69, 69, 66]), '->', 69);
console.log(big([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);big
console.log(big([1, 2, 3, 4, NaN]), '->', 4);
console.log(big([1, 2, NaN, 3, 4]), '->', 4);
console.log(big([NaN, 1, 2, 3, 4]), '->', 4);
console.log(big([NaN, NaN, 2, 3, 4]), '->', 4);
console.log(big([NaN, NaN, NaN, 3, 4]), '->', 4);
console.log(big([NaN, NaN, NaN, NaN, 4]), '->', 4);
console.log(big([1, 2, 3, 4, Infinity]), '->', 4);
console.log(big([1, 2, 3, 4, Infinity]), '->', 4);big
console.log(big([0, -Infinity, Infinity, NaN, null, undefined, '', 'a', [], ['a']]), '->', 0);
console.log(big([0, '2']), '->', 0);
console.log(big([0, [3]]), '->', 0);
console.log(big([0, true]), '->', 0);
console.log(big([-1, false]), '->', -1);
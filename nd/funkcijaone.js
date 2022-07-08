function tusciafunkcija() {
    return false;
}

console.log(tusciafunkcija());

console.clear()

function smalNum(list) {
    if (!Array.isArray(list)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if (list.length === 0) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }

    let smallest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if ( number > smallest && isFinite(number)) {
            smallest = number;
        }
   
    return smallest;
}
}
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([10, 14, -3, -4, -5, -6, -7, -8]), '->', -1);
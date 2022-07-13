console.clear();

class Dog {
    constructor(vardas, kailis) {
        this.name = vardas;
        this.fur = kailis;
        this.age = 0;
        this.legs = 4;
        this.sound = 'Au!';
        this.tail = true;
        this.parents = {
            mother: '',
            father: '',
        };
    }

    introduce() {
        return `Sveiki, as ${this.name} ir man ${this.age} metu. ${this.sound}`;
    }

    getOlder() {
        this.age += 7;
    }

    changeColor(newFurColor) {
        this.fur = newFurColor;
    }
}

const rexas = new Dog('Rexas', 'brown');
const rikis = new Dog('Rikis', 'white');
const brisius = new Dog('Brisius', 'black');

rexas.getOlder();
rexas.getOlder();
rexas.getOlder();

rikis.getOlder();

brisius.getOlder();
brisius.getOlder();

console.log(rexas.introduce());
console.log(rikis.introduce());
console.log(brisius.introduce());

brisius.changeColor('orange');
rikis.changeColor('margas');

console.log(brisius);
console.log(rikis);
console.log(rexas);
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const cinderellas = [
    new Cinderella('Cindirella1', 23, 25),
    new Cinderella('Cindirella2', 24, 26),
    new Cinderella('Cindirella3', 25, 27),
    new Cinderella('Cindirella4', 26, 28),
    new Cinderella('Cindirella5', 27, 29),
    new Cinderella('Cindirella6', 28, 30),
    new Cinderella('Cindirella7', 29, 31),
    new Cinderella('Cindirella8', 30, 32),
    new Cinderella('Cindirella9', 31, 33),
    new Cinderella('Cindirella10', 31, 34),
];

const prince = new Prince("Albert", 27, 27);

// ---------------Варіант № 1 -----------------------
//
// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.shoe) {
//         prince.wife = cinderella;
//     }
// }
// console.log(prince.wife);

// ---------------Варіант № 2 -----------------------

prince.wife = (cinderellas.find(cinderella => cinderella.footSize === prince.shoe));
console.log(prince.wife);
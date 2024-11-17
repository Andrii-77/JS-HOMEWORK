function Car(model, producer, yearOfProduce, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.yearOfProduce = yearOfProduce;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (const key in this) console.log(key + ' - ' + this[key]);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        if(newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        if (newValue > 1800) this.yearOfProduce = newValue;
    };
    this.addDriver = function (driver) {
        if(driver) this.driver = driver;
    };
}

const car = new Car('Passat', 'VW', 1995, 220, 2.0);
console.log(car);
console.log('');
car.drive();
console.log('');
car.info();
console.log('');
car.increaseMaxSpeed(50);
car.changeYear(1999);
car.addDriver({name: 'Shumi'});
console.log(car);



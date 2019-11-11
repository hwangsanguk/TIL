//ES6 > class

class Car {
    //생성자
    constructor(car){
        this.name = car.name;
        this.price = car.price;
        this.year = car.year;
    };
    //new Car({name, price, year})가 들어올거임
    drive() {
        console.log('Baaam');
    }

};
const bmw = new Car({
    //인스턴스 할당된 실체를 의미, class를 통해 인스턴스가 생성됨
    name: 'x6'.price,
    price: 1,
    year : 2019
});
const audi = new Car({
    name:'a6',
    price: 0.5,
    year: 2016
});

bmw.drive();
audi.drive();


//extends?
// class를 상속하는  개념
class SuperCar extends Car{
    constructor(option){
        super(option);
        console.log('Awesome')
    };
    powerDrive(){
        console.log("Baaaaaaaaaaaaaaaaaam")
    }
};

const iAmSuperCar = new SuperCar({
    name: 'super',
    price: 100,
    year:2020
});

console.log(iAmSuperCar)
iAmSuperCar.drive();
iAmSuperCar.powerDrive();

class Monster {
    constructor(option){
        this.name = option.name;
        this.health = 100;
    };
    momtongbakchigi(monster){
        monster.health -= 10;
    }
};
const pikachu = new Monster({
    name:'pikachu',
    health:100
})

class Dinasaur extends Monster {
    constructor(option){
        super(option);
    };
};

const tirano = new Dinasaur({
    name : 'tirano',
    health:100
})

tirano.momtongbakchigi(pikachu)
console.log(pikachu)
let car={
name:"BMW",
model:2020,
color:"black",

canDrive: function() {
    return `You can drive this ${this.name}`;
},
isOld: function(){
    let date = new Date("1-1-2020");
    let date1 = new Date("1-1-2023");
    return date>date1
}
}
 console.log(car);

 console.log(car.color)
 car.color = "white"
 console.log(car.color)

 console.log(car);
 car.make="Toyota"
 console.log(car);

 delete car.model;

let drive = car.canDrive();
console.log(drive)
console.log(car.isOld())

class Car {
    constructor(x, y, z) {
        this.name = x;
        this.color = y;
        this.model = z;
    }
    drive() {
        return `${this.name} can drive.`
    }
    sale() {
        return `${this.name} of color ${this.color} is on sale.`
    }
}

let car1 = new Car("Corolla", "Black", 2022);
car1.cancellable = false;
car1.price = 500000;
console.log(car1);

let car2 = new Car("Alto", "White", 2022);
console.log(car2);
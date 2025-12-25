'use strict';
/*
const Person = function (firstName,birthYear){
this.firstName=firstName;
this.birthYear=birthYear;
this.ClassName='Person'
//never do this 
// this.calcAge=function(){
//     console.log(2037-this.birthYear);
// }

} 
 */


//1. New {}  is created .
//2. Function is called, this ={}
//3. {} linked to prototype
//4. function automatically return {}

/*
const jonas =new Person('Jonas',1994);
const jack =new Person('jack',1995);
const shahid =new Person('Shahid',1997);
console.log(jonas,shahid);
console.log(jonas instanceof Person);
 */
//ProtoType
/*
console.log(Person.prototype);

Person.prototype.calcAge=function(){
    console.log(2037-this.birthYear);
}
jonas.calcAge();
shahid.calcAge();
 */


// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(shahid));
// console.log(Person.prototype.isPrototypeOf(Person));

// //.PrototypeOfLinkedObjects
// Person.prototype.species = 'Homo Sapiens'
// // this added to prototype not to object
// console.log(jonas.species,shahid.species);
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));


// const account = {
//     owner: 'Jonas',
//     movements: [200, 500, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop()
//     },
//     set latest(mov) {
//         this.movements.push(mov)
//     }
// }

// console.log(account.latest);
// account.latest=60;
// console.log(account.movements);


// const CompanyAdmin = class {
//     constructor(name, salary) {
//         this.empName = name;
//         this.empSalary = salary
//     }
//     get employeeSalary() {
//         return this.empSalary
//     }

//     set employeeSalary(sal) {
//         if (sal < 10000) {
//             console.log('Salary is too low')
           
            
//         }else  this.empSalary = sal ;
//     }
// }
// const comp =new CompanyAdmin('shahid',5000)
// console.log(comp);
// console.log(comp.employeeSalary);
// comp.employeeSalary=3000;
// console.log(comp.employeeSalary);


// // coding challange

// const Car = function (make, speed) {
//     //make is brand
//     //speed in km/h
//     this.Maker = make;
//     this.Speed = speed; 
// }

// Car.prototype.accelerate = function () {
//     console.log(this.Speed += 10);
// };
// Car.prototype.brake = function () {
//     console.log(this.Speed -= 5);
// }

// const car1 = new Car('BMW', 120);
// console.log(car1);
// car1.accelerate();
// car1.brake();

// const car2 = new Car('Mercedes', 95)
// console.log(car2);
// car2.accelerate()
// car2.brake();

class Car {
    constructor(make, speed) {
        this.Maker = make;
        this.Speed = speed;
    }
    get accelerate() {
        return `${this.Speed} km/h`
    }
    set accelerate(spd) {
        this.Speed += spd;
    }

    get brake() {
        return `${this.Speed} km/h`
    }
    set brake(spd) {
        this.Speed -= spd
    }

    get speedUs(){
        return `${this.Speed/1.6} mi/h`
    }
    set speedUs(spd){
        this.Speed+=spd*1.6//given in mi/h converted in km/h
    }

}

// const carObj=new Car('BMW',190);
// console.log(carObj);
// carObj.accelerate=15;
// carObj.brake=150;
// console.log(carObj.accelerate); 
// console.log(carObj.brake); 

const SpeedUsCar = new Car('Ford',120);
SpeedUsCar.speedUs=200
console.log(SpeedUsCar.speedUs);
console.log(SpeedUsCar.Speed,SpeedUsCar.Maker);

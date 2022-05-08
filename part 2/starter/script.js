'use strict';

/*
function logger() {
    console.log('my name is tom');

}
logger();//calling,running incoking functions

//functions example

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//alternate way
console.log(fruitProcessor(5, 0));

//for apple and orange juice
const appleOrangeJuice = fruitProcessor(10, 6);
console.log(appleOrangeJuice);


//Function Declaration And Expression


//Function Declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}


const age1 = calcAge1(1991);
console.log(age1);


//function Expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(2003);
console.log(age2);


//Arrow Functions

const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

//ex2
const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstname} retires in ${retirement}`;
}
console.log(yearsUntilRetirement(1994, 'Tommy'));
console.log(yearsUntilRetirement(1997, 'Fidelis'));



// calling funcs from other funcs

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePiece = cutFruitPieces(oranges);
//     const juice = `juice with ${applePieces} pieces of apples and ${orangePiece} pieces of oranges`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));


//Review Of Functions

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstname) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstname} retires in  ${retirement} years`);
//         return retirement
//     } else {
//         console.log(`${firstname} is alreasy retired`);
//         return -1;
//     }

// }

// console.log(yearsUntilRetirement(1994, 'thomas'));
// console.log(yearsUntilRetirement(1950, 'fidelis'));
*/

/*
//Arrays
//creating Arrays
// const friends = ['ben', 'fide', 'mose',];
// //or
// const friendss = new Array('benlee', 'fidelee', 'maxelee');
// console.log(friends, friendss);
// //retriev array
// console.log(friends[2]);
// //find legth of array

// console.log(friends.length - 1);
// //replace arrays
// friends[2] = 'richard';
// console.log(friends);

// //arrays can old different data types

// const firstname = 'thomas';
// const thomas = [firstname, 'mutavi', 2022 - 1994];
// console.log(thomas);

// //exercise

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }
// const yearz = new Array(1990, 1967, 2002, 2010, 2018);
// const agez = calcAge(yearz[0]);
// const agez1 = calcAge(yearz[1]);
// const agez2 = calcAge(yearz[2]);
// console.log(agez, agez1, agez2);


//Basic Array Operator (Methods)
//Push -> add values at the end of an array
const friends = ['ben', 'fide', 'mose',];
const newLength = friends.push('sam');
console.log(friends);
console.log(newLength);
//unshif ->add value tyo the begginng of an array
friends.unshift('john');
console.log(friends);
//pop removes last element
//pop also returns the removed evalue
friends.pop();
console.log(friends);
//shift
//removed first element of an array
friends.shift();
console.log(friends);

//find index of eleemnt in array
console.log(friends.indexOf('fide'));
//find if an elemenbt is in an Array
console.log(friends.includes('bob'));//returns true or false
console.log(friends.includes('fide'));
*/

//objects
// const Cars = {
//     name: 'F 150',
//     models: 'ford',
//     year: '2022',
//     hasTurbo:false
// }
// console.log(Cars.models);//accsesing object parameters using dot notation
// console.log(Cars['year']);//accessing objects parameters using bracket notation
//also
// const myCarModel = Cars.models;
// const myCarModelName = Cars['name'];
// console.log(myCarModel);
// console.log(myCarModelName);

//objest methods
const Cars = {
    name: 'F 150',
    models: 'ford',
    year: 2003,
    hasTurbo: false,
    //a function nested in object as a property
    //any function attached to a object is called a method
    // calcAge: function (year) {
    //     return 2022 - year;
    // }
    // calcAge: function () {
    //     return 2022 - this.year;
    // }
    calcAge: function () {
        this.age = 2022 - this.year;
        return this.age;

    },
    getSummary: function () {
        return `${this.name} is ${this.models} model utility vehicle which is ${this.calcAge()} years old and has ${this.hasTurbo ? 'a' : 'no'} turbo.`
    }
}
console.log(Cars.age);
console.log(Cars.age);
console.log(Cars.getSummary());
// console.log(Cars['calcAge'](1991));
// console.log(Cars.calcAge(2004));
// console.log(Cars.calcAge());

//coding challenges 3
const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.Bmi = markMiller.mass / (markMiller.height * markMiller.height);
        return this.Bmi;
    }


}

console.log(markMiller.calcBmi());
const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        this.Bmi = johnSmith.mass / (johnSmith.height * johnSmith.height);
        return this.Bmi;
    }
}
console.log(johnSmith.calcBmi());
console.log(`${markMiller.fullName}'s   ${markMiller.calcBmi()} BMI is higher than ${johnSmith.fullName}'s ${johnSmith.calcBmi()}`);

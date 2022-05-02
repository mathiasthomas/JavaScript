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
*/


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

//function challenge
//ex2
const calcEvarage = (score1, score2, score3) => {
    const evarageScore = (score1 + score2 + score3) / 3;
    //return retirement;
    return evarageScore;
}
console.log(calcEvarage(44, 23, 71));
console.log(calcEvarage(65, 54, 49));

const checkWinner = (avgDolphins, avgKoalas){

}

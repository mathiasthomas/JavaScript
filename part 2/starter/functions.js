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
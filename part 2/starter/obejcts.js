//objects
const Cars = {
    name: 'F 150',
    models: 'ford',
    year: '2022'
}
console.log(Cars.models);//accsesing object parameters using dot notation
console.log(Cars['year']);//accessing objects parameters using bracket notation
//also
const myCarModel = Cars.models;
const myCarModelName = Cars['name'];
console.log(myCarModel);
console.log(myCarModelName);


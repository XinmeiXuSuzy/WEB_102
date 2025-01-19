// // Object practice 
// const car = {
//     carName: 'Toyota',
//     age: 50,
//     prod_msg: function() {
//         console.log(`This car was produced in 1980, and it is ${this.age}-year-old now.`);
//     }
// };

// const myCar = car;
// myCar.prod_msg();

// Iterator practice 
const nameList = ['Abby','Bobby','Cindy'];
const greetMsg = nameList.map(person => person + ' has arrived.');
console.log(typeof(greetMsg.map))
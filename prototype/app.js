// let animal = {
//   sound: "generic sound",
//   makeSound: function () {
//     console.log(this.sound);
//   },
// };

// let dog = {
//   breed: "Labrador",
// };

// // dog __proto__ sini animal ga o'rnatamiz
// dog.__proto__ = animal;

// console.log(dog.sound); // "generic sound"

//======================================

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log(`hi my nama is ${this.name}, ${this.age}`);
// };
// let person1 = new Person("Asadbek", 24);
// console.log(person1.greet());

//=============================

// Array.prototype.removeDublicated = function () {
//   return [...new Set(arr)];
// };

// let arr = [1, 2, 3, 4, 4, 4, 5, 67, 7, 9, 0];
// let res = arr.removeDublicated();
// console.log(res);

//==================================

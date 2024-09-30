// Quyidagi massivdan qiymatlarni ajratib oling va chop eting:

// const fruits = ["Apple", "Banana", "Mango"];

// const [firstFruit, secondFruit] = fruits;

// console.log(firstFruit, secondFruit);

//===============================================

// const person = {
//   name: "Ali",
//   age: 25,
//   country: "Uzbekistan",
// };

// const { name, age, country } = person;
// console.log(name, age, country);

//=============================================

// const options = {
//   title: "Menu",
//   width: 300,
// };

// const { title, width, height = 400 } = options;

// console.log(title, width, height);

//====================================================

// const numbers = [10, 20, 30, 40, 50];

// const [first, ...rest] = numbers;
// console.log(first, rest);

//===============================================

// const user = {
//   name: "John",
//   address: {
//     city: "New York",
//     zip: 10001,
//   },
// };

// const {
//   name,
//   address: { city, zip },
// } = user;

// console.log(name, city, zip);

//==============================================

// const data = {
//   id: 1,
//   info: {
//     name: "Alice",
//     scores: [85, 90, 92],
//   },
// };

// const {
//   info: {
//     name,
//     scores: [firstScore, ...rest],
//   },
// } = data;

// console.log(name, firstScore);

//==================================================

// const config = {
//   server: "localhost",
//   port: 8080,
//   settings: {
//     theme: "dark",
//   },
// };

// const {
//   server,
//   port,
//   settings: { theme, mode = "auto" },
// } = config;

// console.log(server, port, theme, mode);

//================================================

// function introduce({ name, age, job = "student" }) {
//   console.log(`${name} is ${age} years old and works as a ${job}.`);
// }

// const person = {
//   name: "Bob",
//   age: 22,
// };

// // "job" parametri obyekt ichida yo'q, default qiymat beriladi.
// introduce(person);

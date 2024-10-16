// Recrusion functions

// let res = 0;

// function sum(n) {
//   if (n === 1) return (res += 1);
//   else {
//     res += n;
//     return sum(n - 1);
//   }
// }

// let result = sum(4);
// console.log(result);

// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jacl", salary: 1300 }],
//   },
// };

// function getCalc(company) {
//   if (Array.isArray(company)) {
//     return company.reduce((acc, cur) => (acc += cur.salary), 0);
//   } else {
//     let sum = 0;
//     for (let subdep of Object.values(company)) {
//       sum += getCalc(subdep);
//     }
//     return sum;
//   }
// }

// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jacl", salary: 1300 }],
//   },
// };

// var total = 0;

// function getCalc(data) {
//   for (let key in data) {
//     if (Array.isArray(data[key])) {
//       data[key].forEach((item) => {
//         total += item.salary;
//       });
//     } else {
//       getCalc(data[key]);
//     }
//   }
// }

// getCalc(company);

// console.log(total);

// let result = getCalc(company);
// console.log(result);

//=============================
// faactoriani hisoblash

// function fkt(n) {
//   if (n === 1) return 1;
//   else return n * fkt(n - 1);
// }

// console.log(fkt(5));

//=====================================

// Rekursiya yordamida massivdagi elementlarning yig'indisini hisoblash:

// Massivdagi barcha sonlarning yig'indisini rekursiya orqali hisoblang.
// Masalan: sumArray([1, 2, 3, 4, 5]) natijasi 15 bo'lishi kerak.

// function sumArray(arr) {
//   if (arr.length === 0) return 0;

//   return (arr[0] += sumArray(arr.slice(1)));
// }

// let arr = [1, 2, 3, 4, 5];
// let result = sumArray(arr);
// console.log(result);

//=====================================
// Teskari satrni olish:

// Berilgan satrni rekursiya yordamida teskari o'zgartiring.
// Masalan: reverseString("hello") natijasi "olleh" bo'lishi kerak.

// function reverseString(str) {
//   if (str === "") return str;
//   return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
// }

// let result = reverseString("hello");
// console.log(result);

//=================================================

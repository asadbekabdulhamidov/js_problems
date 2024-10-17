// Sonlarni teskari qilish: Berilgan sonni teskari
//aylantirib qaytaradigan funksiyani yozing.Masalan,
//12345 -> 54321.

// let num = 12345;

// function reverseNum(num) {
//   let reverseNumber = num.toString().split("").reverse().join("");
//   return reverseNumber;
// }
// let res = reverseNum(num);
// console.log(res);

//========================================

// Toq va juft sonlar: Berilgan sonning toq yoki juft
//ekanligini aniqlaydigan funksiyani yozing.

// let ishoraNumber = (num) => {
//   return num % 2 == 0 ? `ha juft son` : `toq son`;
// };

// let res1 = ishoraNumber(1);
// let res2 = ishoraNumber(2);

// console.log(res1);
// console.log(res2);

//========================================
// Massivdagi eng katta son: Massivda eng katta sonni
//topadigan funksiyani yozing.Masalan, [3, 7, 2, 9, 5] -> 9.

// let upNumber = (ar) => {
//   let num = Math.max(...arr);
//   return num;
// };
// let arr = [3, 7, 2, 9, 5];
// let res = upNumber(arr);
// console.log(res);

//========================================

// Fibonacci: n-elementgacha bo'lgan Fibonacci
//ketma - ketligini qaytaradigan funksiyani yozing.

// function fibonacci(n) {
//   const fib = [0, 1]; // 0 va 1 bilan boshlanadi
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2]; // O'tgan ikkita elementni qo'shish
//   }
//   return fib; // n-elementgacha bo'lgan qismini qaytaradi
// }

// let res = fibonacci(10);

// console.log(res); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
//=====================================

// Massivlarni birlashtirish: Ikkita massivni birlashtirib,
//tartiblangan holda qaytaradigan funksiyani yozing.Masalan,
//[3, 5, 7] va[2, 6, 8] -> [2, 3, 5, 6, 7, 8].

// let addArr = (arr1, arr2) => {
//   let newArr = arr1.concat(arr2).sort((a, b) => a - b);
//   return newArr;
// };
// let arr1 = [3, 5, 7];
// let arr2 = [2, 6, 8];
// let res = addArr(arr1, arr2);
// console.log(res);

//====================================
// Stringni teskari qilish: Berilgan stringni teskari
//qilib qaytaradigan funksiyani yozing.Masalan,
//"hello" -> "olleh".

// let reverseStr = (str) => {
//   return str.split("").reverse().join("");
// };
// let res = reverseStr("hello");
// console.log(res);

//================================================
// Palindrom: Berilgan string palindrom
//(oldidan va orqasidan bir xil o'qiladigan)
//ekanligini aniqlaydigan funksiyani yozing.

// let isPolindrom = (str) => {
//   let left = 0;
//   let rigth = str.length - 1;

//   while (left < rigth) {
//     if (str[left] !== str[rigth]) return false;
//     left++;
//     rigth--;
//   }

//   return true;
// };

// let str = "level";
// let res = isPolindrom(str);
// console.log(res);

//=================================

// Unique elementlar: Berilgan massivda faqat bir marta
// uchragan elementlarni qaytaradigan funksiyani yozing.Masalan, [1, 2, 2, 3, 4, 4, 5] -> [1, 3, 5].

// let isArr = (arr) => {
//   let newArr = arr.filter((item, index, arr) => {
//     if (index == arr.lastIndexOf(item)) {
//       return item;
//     }
//   });
//   return newArr;
// };

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let res = isArr(arr);
// console.log(res);

// let isArr = (arr) => {
//   return [...new Set(arr)];
// };

// let arr = [1, 2, 2, 3, 4, 4, 5];
// arr = isArr(arr); // Yangi qiymatni asl massivga tayinlaymiz
// console.log(res); // [1, 2, 3, 4, 5]

//=========================================

// Takrorlanuvchi belgilarni o'chirish:
//Berilgan stringdagi takrorlanuvchi belgilarni olib
// tashlaydigan funksiyani yozing.Masalan, "hello" -> "helo".

// let isStr = (str) => {
//   return [...new Set(str)].join("");
// };

// let res = isStr("hello");
// console.log(res);

//==========================================

// Arrayni tekislash (Flatten):
// Berilgan ko'p qavatli (nested) massivni tekislab,
//bir qavatli massivga aylantiradigan funksiyani yozing.
//Masalan, [[1, 2], [3, 4], [5]] -> [1, 2, 3, 4, 5].

// let arr = [[1, 2], [[3, 4]], [5]];

// function flatten(arr) {
//   return arr.flat(Infinity);
// }

// let res = flatten(arr);
// console.log(res);

//=============================================
// Array ichidagi eng katta sonni topish:

// function findMax(arr) {
//   // Array ichidagi eng katta sonni toping
//   return Math.max(...arr);
// }
// let arr = [1, 2, 3, 10, 5];
// console.log(findMax(arr)); // 10

//===================================
// Faqat musbat sonlarni yig'indisini toping

// function sumPositiveNumbers(arr) {
//   let count = 0;
//   arr.forEach((element) => {
//     if (element > 0) count += element;
//   });
//   return count;
// }
// let arr = [-1, 2, 3, -4, 5];
// console.log(sumPositiveNumbers(arr)); // 10

//================================================
// Stringning faqat birinchi harfini katta qiling

// function capitalizeFirstLetter(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(capitalizeFirstLetter("javascript")); // "Javascript"

//===========================================
// Har bir elementni kvadratga oshiring va array qaytaring

// function squareNumbers(arr) {
//   let kvArr = arr.map((item) => item ** 2);
//   return kvArr;
// }
// console.log(squareNumbers([1, 2, 3, 4])); // [1, 4, 9, 16]

//================================================
// min va max oralig'ida tasodifiy son qaytaring
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomNumber(1, 100)); // Masalan: 56
// console.log(getRandomNumber(1, 100)); // Masalan: 56
// console.log(getRandomNumber(1, 100)); // Masalan: 56

//==========================================
// Takrorlanayotgan harflarni olib tashlang

// function removeDuplicates(str) {
//   return [...new Set(str)].join("");
// }
// console.log(removeDuplicates("hello")); // "helo"

//==============================================
// Stringni palindrome yoki yo'qligini tekshiring

// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false

//==================================================
// Class yordamida avtoulov yaratish:
// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   getCarInfo() {
//     // Avtoulov haqida to'liq ma'lumot qaytaring
//     return `nomi:${this.make}, modeli:${this.model},  yili:${this.year} `;
//   }
// }
// const myCar = new Car("Toyota", "Camry", 2022);
// console.log(myCar.getCarInfo()); // "Toyota Camry, 2022"

//====================================
// Arraydagi sonlarni o'sish tartibida qaytaring

// function sortNumbers(arr) {
//   return arr.sort((a, b) => a - b);
// }
// console.log(sortNumbers([3, 1, 4, 2])); // [1, 2, 3, 4]

//======================================
// n gacha bo'lgan Fibonacci ketma-ketligini qaytaring

// function fibonacci(n) {
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }
// console.log(fibonacci(5)); // [0, 1, 1, 2, 3]

//==========================================
// Array ichidagi eng uzun stringni qaytaring
// function longestString(arr) {
//   let longest = "";

//   for (let str of arr) {
//     if (str.length > longest.length) {
//       longest = str;
//     }
//   }

//   return longest;
// }
// console.log(longestString(["apple", "banana", "pear"]));

// "banana"

// class longeStr {
//   constructor(arr) {
//     this.arr = arr;
//   }
//   fnk1() {
//     let longest = "";

//     for (let str of this.arr) {
//       if (str.length > longest.length) {
//         longest = str;
//       }
//     }

//     return longest;
//   }
//   fnk2() {
//     this.arr.sort((a, b) => a.length - b.length);
//     return this.arr[this.arr.length - 1];
//   }
// }

// let str1 = new longeStr(["apple", "banana", "pear"]);
// console.log(str1.fnk1());

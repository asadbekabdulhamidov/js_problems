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

// Array1. n natural soni berilgan.
//Dastlabki n ta toq sondan tashkil topgan
//massiv qaytaruvchi getInitialOdds(n) nomli funksiya tuzing.
// Input: getInitialOdds(5)
// Output: [1, 3, 5, 7, 9]

// let n = 5;

// let getInitialOdds = function (n) {
//     const odds = [];

//   for (let i = 0; i < n; i++) {
//     odds.push(2 * i + 1);
//   }
//   return odds;
// };

// let result = getInitialOdds(n);
// console.log(result);

//==========================================

// Array2. arr nomli massiv berilgan.
//Massiv elementlari orasidan juftlarini indekslari
// kamayish tartibidan hosil bo’lgan massivni qaytaruvchi
//getEvenReverse(arr) programma tuzilsin.
// Input: [4, 5, 7, 8, 6, 9]
// Output: [6, 8, 4]

// let arr = [4, 5, 7, 8, 6, 9];

// const getEvenReverse = function (arr) {
//   let even = [];
//   for (value of arr) {
//     if (value % 2 == 0) even.push(value);
//   }
//   return even.reverse();
// };

// let result = getEvenReverse(arr);
// console.log(result);

//=====================================

// Array3. n ta elementdan tashkil topgan massiv berilgan.
// Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.

// A[0], A[n-1], A[1], A[n-2], A[2], A[n-3],...
// Input:  [4, 5, 7, 8, 6, 9]
// Output: 4, 9, 5, 6, 7, 8, 8, 7, 6, 5, 9, 4

// Array4. N ta elementdan tashkil topgan arr nomli massiv
//va K, L butun sonlari berilgan. (0 <= K <= L < N).
//Massivning K va L indekslari orasidagi elementlari
//yig'indisini chiqaruvchi rangeSum(arr, K, L) programma tuzilsin.
// Input: arr = [1, 6, 9, 5, 8, 10, 15];
// Ouput: rangeSum(arr, 2, 5) => 32

// let arr = [1, 6, 9, 5, 8, 10, 15];

// let rangeSum = function (arr, K, L) {
//   let count = 0;
//   for (let i = K; i <= L; i++) {
//     count += arr[i];
//   }
//   return count;
// };

// let result = rangeSum(arr, 2, 5);
// console.log(result);

//============================================

// Array5. n ta elementdan tashkil topgan massiv berilgan.
// Massivda qatnashgan sonlardan faqat bittadan chiqaruvchi getSingleArr(arr) tuzilsin.
// Input: let arr =  [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7]
// Output: [7, 4, 2, 3, 1, 5]

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];

// const getSingleArr = (arr) => {
//   let singleArr = [];

//   for (value of arr) {
//     if (!singleArr.includes(value)) {
//       singleArr.push(value);
//     }
//   }
//   return singleArr;
// };

// let result = getSingleArr(arr);
// console.log(result);

//=======================

// Array6. n ta elementdan iborat massiv berilgan.
//Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin.
// Input: [7, 4, 9, 2, 3, 1, 5]
// Output:
// Max: 9
// Min: 1
// [7, 4, 1, 2, 3, 9, 5]

// let arr = [7, 4, 9, 2, 3, 1, 5];

// const minMaxArr = (arr) => {
//   let minItem = Math.min(...arr);
//   let maxItem = Math.max(...arr);

//   let minIndex = arr.indexOf(minItem);
//   let maxIndex = arr.indexOf(maxItem);

//   arr[minIndex] = maxItem;
//   arr[maxIndex] = minItem;

//   return arr;
// };

// let result = minMaxArr(arr);
// console.log(result);

//=========================================================

// Array7. n ta elementdan tashkil topgan berilgan.
//Massiv elementlarini 1 ta o'rin ongga siklik siljituvchi programma tuzilsin.
//a[0] element qiymati a[1] ga o'tadi, a[1] esa a[2] ga, ..., a[n – 1] qiymati a[0] ga o'tadi.
// Input: [1, 5, 8, 9, 10]
// Output: [5, 8, 9, 10, 1]

// let arr = [1, 5, 8, 9, 10];

// let item = arr.shift();
// arr.push(item);
// console.log(arr);

//================================================
// Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan
//massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// Input: 5
// Output: [2, 4, 16, 32, 62]

// let n = 5;
// let num = 2;

// function getLevel(n, num) {
//   let arr = [];

//   for (let i = 1; i <= n; i++) {
//     arr.push(2 ** i);
//   }

//   return arr;
// }

// let result = getLevel(n, num);
// console.log(result);
//==========================================================

// Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B;
//boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan
// massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20]

// let n = 6;
// let A = 2;
// let B = 3;

// function getArr(n, a, b) {
//   let arr = [a, b];

//   console.log(1);

//   outhor: for (let i = 0; i < n; i++) {
//     let count = 0;

//     inner: for (let k = 0; k < arr.length; k++) {
//       count += arr[k];

//       if (arr.length == n) {
//         break outhor;
//       }
//     }

//     arr.push(count);
//   }

//   return arr;
// }

// let result = getArr(n, A, B);
// console.log(result);

//=======================================================

// Array3. n ta elementdan tashkil topgan massiv berilgan.
// Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.

// let arr = [1, 2, 3, 4, 5];

// let reverseArr = arr.reverse();
// console.log(reverseArr);

//========================================

// Array4. n ta elementdan tashkil topgan massiv berilgan.
//Massiv elementlari orasidan toqlarini indekslari o'sish
//tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3

// let arr = [4, 5, 7, 8, 6, 9];

// function indexOdd(arr) {
//   let oddArr = [];
//   for (value of arr) {
//     if (value % 2 == 1) {
//       oddArr.push(value);
//     }
//   }

//   return oddArr;
// }

// let result = indexOdd(arr);
// console.log(result);

//=============================================

// Array5. n ta elementdan tashkil topgan massiv berilgan.
// Dastlab massiv elementlari orasidan juftlarini indekslari
//o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan
//toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5

// let arr = [4, 5, 7, 8, 6, 9];

// const getArr = (arr) => {
//   let odd = [];
//   let even = [];

//   for (value of arr) {
//     if (value % 2 == 0) even.push(value);
//     else odd.unshift(value);
//   }
//   return even.concat(odd);
// };

// let result = getArr(arr);
// console.log(result);

//=================================================

// Array6. n ta elementdan tashkil topgan massiv berilgan
//(n juft son). Massiv elementlari orasidan quyidagilarini
//chiqaruvchi programma tuzilsin.A[0], A[2], A[4], ... Shart
//operatori ishlatilmasin.

// let arr = [4, 5, 7, 8, 6, 9, 10, 12];

// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

//===========================

// Array7. n ta elementdan tashkil topgan massiv berilgan
//(n juft son). Massiv elementlari orasidan quyidagilarini
//chiqaruvchi programma tuzilsin.A[n - 1], A[n - 3], ...A[1].
//Shart operatori ishlatilmasin.

// let arr = [4, 5, 7, 8, 6, 9, 10, 12];

// for (let i = 1; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

//===========================================

// Array8. n ta elementdan tashkil topgan massiv berilgan.
//Dastlab massiv elementlari orasidan juft indekslilarini
//keyin toq indekslilarini chiqaruvchi programma tuzilsin.
// A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.

// let arr = [4, 5, 7, 8, 6, 9, 10, 12];

// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

// for (let i = 1; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

//===================================================

// Array9. n ta elementdan tashkil topgan massiv berilgan
//(n juft son). Dastlab massiv elementlari orasidan toq indekslilarini
//o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi
// programma tuzilsin.A[1], A[3], A[5],..A[6], A[4], A[2], A[0].
//Shart operatori ishlatilmasin.
// let arr = [4, 5, 7, 8, 6, 9, 10, 12];

// const getArr = function (arr) {
//   let odd = [];
//   let even = [];

//   for (let i = 1; i < arr.length; i += 2) {
//     odd.push(arr[i]);
//   }
//   for (let i = 0; i < arr.length; i += 2) {
//     even.unshift(arr[i]);
//   }

//   return odd.concat(even);
// };

// let result = getArr(arr);
// console.log(result);

//=================================

// Array10. n ta elementdan tashkil topgan massiv berilgan.
// Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.
//A[0], A[1], A[n - 1], A[n - 2], A[2], A[3], A[n - 3], A[n - 4],
// ...

// const arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let n = arr.length;

// let i = 0,
//   j = n - 1;

// while (i < n) {
//   console.log(arr[i]);
//   console.log(arr[i + 1]);
//   console.log(arr[j]);
//   console.log(arr[j - 1]);

//   i += 2;
//   j -= 2;
// }

//========================================

// Array11. N ta elementdan tashkil topgan arr nomli massiv
//va K, L butun sonlari berilgan. (0 <= K <= L < N).
//Massivning K va L indekslari orasidagi elementlaridan tashqari
//elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.

// const arr = [10, 20, 30, 40, 50, 60, 70, 80];

// function calcArrItem(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (i == K || i == L) {
//       continue;
//     } else count += arr[i];
//   }

//   return count;
// }

// let K = 0,
//   L = 4;
// let result = calcArrItem(arr, K, L);
// console.log(result);

//======================================

//
// Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
// Input: [10, false, “”, “Abdulaziz”, null]
// Output:
// Truthy: [10, “Abdulaziz”]
// Falsy: [false, “”, null]

// let arr = [10, false, "", "Abdulaziz", null];
// let truthy = [];
// let falsy = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]) truthy.push(arr[i]);
//   else falsy.push(arr[i]);
// }

// console.log(truthy, falsy);

//==========================================

// Array13. n ta elementdan tashkil topgan arr nomli
//massiv berilgan.Massiv juft indeksli elementlari orasidan
//kichigini aniqlovchi getOddMin(arr) nomli funksiya tuzilsin.

// const getOddMin = function (arr) {
//   let minArrItem = [];
//   for (value in arr) {
//     if (value % 2 == 0) minArrItem.push(arr[value]);
//   }
//   return Math.min(...minArrItem);
// };
// const arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let result = getOddMin(arr);

// console.log(result);

//=========================================

// Array14. n ta elementdan tashkil topgan arr nomli massiv
//berilgan.Massiv toq indeksli elementlari orasidan kattasini
//aniqlovchi getEvenMax(arr) tuzilsin.

// const getEvenMax = function (arr) {
//   let maxArrItem = [];
//   for (value in arr) {
//     if (value % 2 == 1) maxArrItem.push(arr[value]);
//   }
//   return Math.max(...maxArrItem);
// };
// const arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let result = getEvenMax(arr);

// console.log(result);

//=========================================

// Array15. n ta elementdan tashkil topgan massiv berilgan.
// Massiv elementlari orasidan oxirgi lokal maksimum elementi
// indeksini chiqaruvchi programma tuzilsin.Lokal maksimum
//- o'ng va chap qo'shinisidan katta bo'lgan element.

// let arr = [1, 24, 34, 12, 34, 90, 3, 5, 1];

// // arr.reverse()

// let a = Infinity;

// arr.forEach((item, i) => {
//   console.log(item);

//   if (item > arr[i - 1] && item > arr[i + 1]) {
//     a = item;
//   }
// });

// console.log(arr.indexOf(a));

//===============================================

// Array16. n ta elementdan tashkil topgan
//massiv va R butun soni berilgan.Massiv elementlari
//orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.

// let arr = [1, 24, 34, 12, 34, 3];
// const R = 89;

// let count = Infinity;
// let son = 0;

// arr.forEach((item) => {
//   if (count > Math.abs(R - item)) {
//     count = Math.abs(R - item);
//     son = item;
//   }
// });
// console.log(son);

//====================================================
// Array17. n ta elementdan tashkil topgan massiv berilgan.
//Massiv elementlari orasidan yig'indisi eng katta
//bo'ladigan 2 ta qo'shni elementni chiqaruvchi programma tuzilsin.

// function engKattQoshni(arr) {
//   if (arr.length < 2) {
//     return null;
//   }

//   let engKattaYigindi = 0;
//   let engKattaIndex = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     let yegindi = arr[i] + arr[i + 1];

//     if (yegindi > engKattaYigindi) {
//       engKattaYigindi = yegindi;
//       engKattaIndex = [arr[i], arr[i + 1]];
//     }
//   }

//   return engKattaIndex;
// }
// const arr = [1, 2, 3, 4, 5, 6, 7];
// let result = engKattQoshni(arr);

// console.log(result);

//================================================

// Array18. n ta elementdan tashkil topgan massiv berilgan.
//Massiv elementlari orasida aniq 2 ta bir xil qiymatli element
//bor.Shu bir xil qiymatli elementlar indeksini chiqaruvchi programma tuzilsin.

// const massiv = [1, 2, 3, 4, 5, 6, 7, 3];
// let indekslar = [];

// for (let i = 0; i < massiv.length; i++) {
//   for (let j = i + 1; j < massiv.length; j++) {
//     if (massiv[i] === massiv[j]) {
//       indekslar.push(i, j);
//     }
//   }
// }

// console.log(indekslar);

//=======================
// Array19. n ta elementdan tashkil topgan massiv berilgan.
//Massivda eng ko'p qatnashgan bir xil qiymatli elementni
//va uning sonini chiqaruvchi programma tuzilsin.

// let engKopTakrorlanganEl = (arr) => {
//   let elementlarSoni = {};
//   arr.forEach((item) => {
//     if (elementlarSoni[item]) elementlarSoni[item]++;
//     else elementlarSoni[item] = 1;
//   });

//   let engKopElement = null;
//   let engKopSon = 0;

//   for (let item in elementlarSoni) {
//     if (elementlarSoni[item] > engKopSon) {
//       engKopSon = elementlarSoni[item];
//       engKopElement = item;
//     }
//   }
//   return { element: engKopElement, soni: engKopSon };
// };

// const massiv = [1, 2, 3, 4, 5, 6, 3, 2, 3, 3, 2, 2, 2, 2];
// let result = engKopTakrorlanganEl(massiv);
// console.log(result);

//==================================================

// Array21. n ta butun sonlardan iborat a massiv
// va k butun soni berilgan.Massivning har bir elementini
//k ga orttiruvchi programma tuzilsin.

// let k = 2;
// const massiv = [1, 2, 3, 4, 5, 6, 3, 2, 3, 3, 2, 2, 2, 2];
// let arr = massiv.map((num) => num * k);
// console.log(arr);
//=============================

// Array22. n ta elementdan iborat massiv berilgan (n juft son).
// Massivning birinchi yarmi va ikkinchi yarmi qiymatlari
//almashtirilsin.

// const massiv = [1, 2, 3, 4, 5, 6, 3, 2, 3, 3, 2, 2, 2, 2];
// let yarmi = Math.floor(massiv.length / 2);
// massiv.copyWithin(0, yarmi);

// let yangiMassiv = massiv.slice(yarmi).concat(massiv.slice(0, yarmi));
// console.log(massiv);

//================================================

// Array24. n ta butun sonlardan iborat a massiv berilgan.
// Massivning eng kichik va eng katta elementlari orasidagilarini
// nolga almashtiruvchi programma tuzilsin.Eng kichik va eng katta
//elementlari o'zgarishsiz qoldirilsin.

// const nolgaTeng = function (massiv) {
//   let engMin = Math.min(...massiv);
//   let engMax = Math.max(...massiv);

//   let minIndex = massiv.indexOf(engMin);
//   let maxIndex = massiv.indexOf(engMax);

//   if (minIndex > maxIndex) [minIndex, maxIndex] = [maxIndex, minIndex];

//   for (let i = minIndex + 1; i < maxIndex; i++) {
//     massiv[i] = 0;
//   }
//   return massiv;
// };
// let massiv = [9, 2, 3, 4, 5, 6, 7, 8, 1];
// let result = nolgaTeng(massiv);

// console.log(result);

// Array25. n ta elementdan tashkil topgan massiv berilgan.
// Massiv elementlarini bir qadam chapga siklik siljituvchi
// programma tuzilsin.a[n - 1] element qiymati a[n - 2] ga o'tadi,
//a[n - 2] esa a[n - 3] ga, ...a[0] esa a[n - 1] ga o'tadi.

// let siklSiljish = function (arr) {
//   let n = arr.shift();
//   arr.push(n);
//   return arr;
// };

// let arr = [9, 2, 3, 4, 5, 6, 7, 8, 1];
// let result = siklSiljish(arr);
// console.log(result);

//ikkinchi usul
// let n = arr.lenth;
// arr.copyWithin(n, 0, 1);
// console.log(arr);

//==================================

// Array26. n ta elementdan tashkil topgan massiv va k butun
//soni berilgan(0 <= k < n).Indeksi k ga teng bo'lgan elementni
//o'chiruvchi va yangi massiv qaytaruvchi
//deleteElementWithIndex(arr, k) nomli funksiya tuzilsin.

// let deleteElementWithIndex = function (arr, k) {
//   arr.splice(k, 1);
//   return arr;
// };
// let arr = [9, 2, 3, 4, 5, 6, 7, 8, 1];
// let k = 3;
// let result = deleteElementWithIndex(arr, k);
// console.log(result);

//======================================

// Array27. n ta elementdan tashkil topgan massiv va k, m
//butun sonlari berilgan(0 < k < m < n).Indeksi k dan m gacha
// bo'lgan elementlarni o'chiruvchi programma tuzilsin.
//Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.
// let deleteElementWithIndex = function (arr, k, m) {
//   let lastIndex = m - k;

//   arr.splice(k, lastIndex);
//   return arr;
// };
// let arr = [9, 2, 3, 4, 5, 6, 7, 8, 1];
// let k = 3;
// let m = 6;
// let result = deleteElementWithIndex(arr, k, m);
// console.log(result);

//===============================

// Array28. n ta elementdan tashkil topgan massiv berilgan.
//Massiv elementlari orasidan bir xil qo'shnilarning birini
//o'chiruvchi programma tuzilsin.

// let arr = [9, 2, 3, 4, 4, 4, 5, 5, 6, 7, 8, 1];
// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] == arr[i + 1]) {
//     arr.splice(i, 1);
//     i--;
//   }
// }
// console.log(arr);

//===================

// Array29. n ta elementdan tashkil topgan arr nomli massiv
//berilgan.Massiv elementlari orasidan faqat 1 marta ishtirok
//etganlaridan iborat yangi massiv qaytaruvchi
//getElementsOneTime(arr) nomli funksiya tuzing.
// Input: [1, 5, 6, 1, 5, 7, 2]
// Output: [6, 7, 2]

// function getElementsOneTime(arr) {
//   const elementCount = {};

//   for (let item of arr) {
//     if (elementCount[item]) {
//       elementCount[item]++;
//     } else {
//       elementCount[item] = 1;
//     }
//   }

//   let result = [];

//   for (let key in elementCount) {
//     if (elementCount[key] === 1) result.push(Number(key));
//   }

//   return result;
// }

// let arr = [1, 5, 6, 1, 5, 7, 2];
// let result = getElementsOneTime(arr);
// console.log(result);

//===================================
// Array30. arr nomli massivda k qiymatli bir nech element
//mavjud.Shu elementlar indekslari massividan iborat qiymat
//qaytaruvchid searchAllElements(arr) nomli funksiya hosil qiling!

// function searchAllElements(arr, k) {
//   let result = [];

//   arr.forEach((item, index) => {
//     if (k == item) result.push(index);
//   });
//   return result;
// }

// let arr = [1, 5, 6, 2, 2, 1, 5, 7, 2];
// let k = 2;
// let result = searchAllElements(arr, k);
// console.log(result);

//===========================================

// Task 1 mevalar = ['olma', 'banan', 'uzum', 'shaftoli']
//Berilgan massivdan bitta elementni o'chiring. va
//consolga chiqaring.

// let mevalar = ["olma", "banan", "uzum", "shaftoli"];
// mevalar.pop();
// console.log(mevalar);
//==============================================

// Task 2: Probel bilan ajratilgan o'zbekcha so'zlardan
//iborat satr berilgan.Satrdagi so'zlar sonini
// aniqlovchi programma tuzilsin.

// let matn = "assalomu alaykum hayrli tong";

// let arr = matn.split(" ");
// console.log(arr.length);

//================================================

// Task 3: Probel bilan ajratilgan o'zbekcha so'zlardan
//iborat satr berilgan.Satrdagi eng qisqa so'z
// uzunligini aniqlovchi programma tuzilsin.

// let matn = "assalomu alaykum hayrli tong";
// let arr = matn.split(" ");

// let engQisqa = arr[0].length;

// for (value of arr) {
//   if (value.length < engQisqa) {
//     engQisqa = value.length;
//   }
// }

// console.log(engQisqa);

//===================================================

// Task 4: ["Abbosjon" , "Asrorjon", "Alijon", "Sardorjon"]
//ushbu arroydan foydalab = nib yangi array yarating Yangi
//arraydagi ismlar jon emas  bek qo'shimchasi bilan yozilsin.
//===================================================

// Task 5:  ["Abbosbek" , "Asrorjon", "Alibek", "Sardorjon"]
//ushbu arraydagi ismlar qo'shimchalari jon bo'lsa bek ga bek
// bo'lsa jonga o'zgarsin

// let ismlar = ["Abbosbek", "Asrorjon", "Alibek", "Sardorjon"];

// let newIsmlar = ismlar.map((item) => {
//   if (item.endsWith("jon")) {
//     return item.replace("jon", "bek");
//   } else if (item.endsWith("bek")) {
//     return item.replace("bek", "jon");
//   } else return item;
// });

// console.log(newIsmlar);

//==========================================

// Task 6:  ["Abbosbek" , "Asrorjon", "Alibek",
//"Sardorjon", "Nilufarxon", "Maftunaxon"] berilgan
//arraydagi ismlarda bek bo`lsa jonga, jon bo`lsa bekga
//o`zgartirilsin agarda xon qatnashga bo`lsa ismlar o`zgartirilmasin

// let ismlar = [
//   "Abbosbek",
//   "Asrorjon",
//   "Alibek",
//   "Sardorjon",
//   "Nilufarxon",
//   "Maftunaxon",
// ];

// let newIsmlar = ismlar.map((item) => {
//   if (item.endsWith("jon")) {
//     return item.replace("jon", "bek");
//   } else if (item.endsWith("bek")) {
//     return item.replace("bek", "jon");
//   } else return item;
// });

// console.log(newIsmlar);
//===============================================
// Task 7: "Salom Mening ismim Abbosbek.
//Men Codial akademiyasida ishlayman" ushbu gapda nechta
//harf ishlatilgan ?

// let str = "Salom Mening ismim Abbosbek. Men Codial akademiyasida ishlayman";

// let arr = str.split(" ");
// let count = 0;

// for (value of arr) {
//   count += value.length;
// }
// console.log(count);

//=====================================

// Task 8: mevalar = ['olma', 'banan', 'uzum']
//Berilgan arrayga yangi meva nomini  qo'shing va arrayni
//consolega chiqaring.

// let mevalar = ["olma", "banan", "uzum"];

// mevalar.push("ananas");
// console.log(mevalar);

//=============================

// Task9: mevalar = ['olma', 'banan', 'uzum'];
// array berilgan  Arraydan  ikkinchi indexdagi  elementni o'chiring.

// let mevalar = ["olma", "banan", "uzum"];

// mevalar.splice(2, 1);
// console.log(mevalar);
//==========================================

// Task 10:  birinchiArray = [1, 2, 3],
//ikkinchiArray = [4, 5, 6] ikkita array berilgan
//arrayni bir - biriga qo'shing  va natijani consolga chiqaring.

// let birinchiArray = [1, 2, 3],
//   ikkinchiArray = [4, 5, 6];

// console.log(birinchiArray.concat(ikkinchiArray));

//============================================

// Task 11:  mevalar = ['olma', 'banan', 'uzum']
//array berilgan foydalanuvchi kiritgan mevani
//nechinchi indeksda joylashganini chiqarib bering.

// let mevalar = ["olma", "banan", "uzum"];

// let meva = "olma";

// console.log(mevalar.indexOf(meva));

//========================================

// Task12: mevalar = ['olma', 'banan', 'uzum', 'shaftoli']
//array Berilgan arraydagi elementlarni teskari tartibda
//joylashtiring.va consolga chiqaring;

// let mevalar = ["olma", "banan", "uzum", "shaftoli"];

// let reverceMevalar = mevalar.reverse();
// console.log(mevalar);

//===============================================

// Task 13: ismlar = ['Ali', 'Vali', 'Dilshod', 'Bobur']
//array Berilgan arraydagi elementlarni teskari tartibda
//joylashtiring.va consolga chiqaring;

// let ismlar = ["Ali", "Vali", "Dilshod", "Bobur"];

// let reverseIsmlar = ismlar.reverse();
// console.log(reverseIsmlar);

// homework

// 1-masala: sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] sonlardan
//iborat array berilgan ushbu arraydan foydalanib yangi array
//yarating va ushbu arrayda faqat juft sonlarni consolga natijani
//chiqaring.

// const oddArr = (arr) => {
//   return arr.filter((num) => num % 2 == 0);
// };
// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = oddArr(sonlar);
// console.log(result);

//=============================================

//  2-masala sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//sonlardan iborat array berilgan ushbu arraydan foydalanib
//yangi array yarating va ushbu arrayda faqat toq sonlarni
// consolga natijani chiqaring.

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenArr = sonlar.filter((son) => {
//   return son % 2 == 1;
// });

// console.log(evenArr);

//================================

// 3-masala matnlar = ["salom", "hayr", "javascript", "filter",
//"mavzu", "masala"]
//so`zlardan iborat array berilgan ushbu arraydan
//foydalanib so`zlar uzunligi 5dan kotta bo`lgan so`zlarni
// consolga chiqaring.

// let matnlar = ["salom", "hayr", "javascript", "filter", "mavzu", "masala"];

// let uzunligi = matnlar.filter((soz) => soz.length > 5);
// console.log(uzunligi);

//====================================
// 4-masala  const massiv = ['JavaScript', 'Java', 'Python',
//'Node.js', 'React', 'Angular'] array berliga berilgan
//arraydan foydalanib yangi array yarating va  so`zlar ichida
//"java"  qatnashgan bo`lsa o`sha so`zlarni consolga chiqaring.

// const massiv = ["JavaScript", "Java", "Python", "Node.js", "React", "Angular"];

// let javaArr = massiv.filter((item) => item.includes("Java"));
// console.log(javaArr);

// /===========================================

//  5-masala  const massiv = [15, 25, 35, 45, 55];
//array berilga berilgan arraydan foydalanib yangi array
//yarating va 30dan kichik bo`lga sonlarni consolga chiqaring

// const massiv = [15, 25, 35, 45, 55];
// let newArr = massiv.filter((num) => num < 30);
// console.log(newArr);

//==================================

// 6-masala var text = “salom men codialda ishlayman ”
//sitring malumotda matn berilgan berilgan sitrigdan foydalanib
//yangi array yarating va o`sha arrayga faqat uzunligi 5dan kotta
//bo`lgan so`zlar qolsin.

// let text = "salom men codialda ishlayman";

// let arr = text.split(" ").filter((soz) => soz.length > 5);
// console.log(arr);

//=============================

// 7-masala let harflar = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// array berilga ushbu arraydan foydalanib yangi array yarating
//va o`sha arrayga faqat unli harflarni joylashtiring va consolga
//chiqaring

// let harflar = ["a", "b", "c", "d", "e", "f", "g"];

// let unli = harflar.filter((harf) =>
//   ["a", "e", "i", "o", "u", "o'"].includes(harf)
// );

// console.log(unli);

//====================================

// 8-masala sozlar = ["olma", "banan", "shaftoli", "nok", "anor"]
// massiv berilgan berilgan massivdan foydalanib yangi massiv
//yarating va massivda "a" harfin o`z ichiga olgan so`zlarni consolga chiqaring.

// let sozlar = ["olma", "banan", "shaftoli", "nok", "anor"];
// let mevalar = sozlar.filter((soz) => soz.includes("a"));
// console.log(mevalar);

//============================================

// 9-masala ["Abbosbek" , "Islombek","Alijon","Muhammaddiyor",
//"Mardonbek", "Azimjon"]  ushbu arraydan foydalanib yangi
//array yarating yangi arrayga faqat "bek" qo'shimchasi borlar
//yozilsin.

// let ismlar = [
//   "Abbosbek",
//   "Islombek",
//   "Alijon",
//   "Muhammaddiyor",
//   "Mardonbek",
//   "Azimjon",
// ];

// let beklar = ismlar.filter((ism) => ism.includes("bek"));
// console.log(beklar);

// let beklar = ismlar.filter((ism) => ism.endsWith("bek"));

// console.log(beklar);

//=====================================

// 10-masala sozlar = ["JavaScript", "Python", "HTML", "CSS",
//"React", "Node"]; array berilgan berilgan arraydan foydalanib
// yangi array yarating va arraydagi so`zlarni uzunligi 4 dan
//kottalarini arrayga qo`shing va consolga chiqaring

// let sozlar = ["JavaScript", "Python", "HTML", "CSS", "React", "Node"];

// let newArr = sozlar.filter((soz) => soz.length > 4);
// console.log(newArr);

// 11-masala    sozlar = ["apple", "banana", "cherry", "date",
//"grape"]; massiv berilgan berilgan massivdan foydalanib yangi
// massiv yarating va massivda "b" harfin o`z ichiga olgan
//so`zlarni consolga chiqaring.

// let sozlar = ["apple", "banana", "cherry", "date", "grape"];

// let mevalar = sozlar.filter((soz) => soz.includes("b"));
// console.log(mevalar);

// let arr = [];
// sozlar.forEach((soz) => {
//   if (soz.includes("n")) arr.push(soz);
// });

// console.log(arr);

// 12-masala  const massiv = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];
//array berilga berilgan arraydan foydalanib yangi array
//yarating va  69 dan kotta bo`lga sonlarni consolga  chiqaring.

// const massiv = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];

// let arr = massiv.filter((son) => son > 69);

// console.log(arr);

//================================

// 13-masala var sozlar = ["apple", "banana", "orange", "kiwi", "grape"]
//array berilgan  ushbu arraydan foydalanib arraydagi
//so`zlarni uzunligi 5 dan kotta bo`lgan so`zlarni consolga chiqaring.

// let sozlar = ["apple", "banana", "orange", "kiwi", "grape"];

// let arr = sozlar.filter((soz) => soz.length > 5);
// console.log(arr);

//==============================================

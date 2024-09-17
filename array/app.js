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

// Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.

// Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3

// Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5

// Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.

// Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.

// Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
// A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.

// Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.

// Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], ...

// Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.
//
// Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
// Input: [10, false, “”, “Abdulaziz”, null]
// Output:
// Truthy: [10, “Abdulaziz”]
// Falsy: [false, “”, null]

// Array13. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi getOddMin(arr) nomli funksiya tuzilsin.

// Array14. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getEvenMax(arr) tuzilsin.

// Array15. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan oxirgi lokal maksimum elementi indeksini chiqaruvchi programma tuzilsin. Lokal maksimum - o'ng va chap qo'shinisidan katta bo'lgan element.

// Array16. n ta elementdan tashkil topgan massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.

// Array17. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan yig'indisi eng katta bo'ladigan 2 ta qo'shni elementni chiqaruvchi programma tuzilsin.

// Array18. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasida aniq 2 ta bir xil qiymatli element bor. Shu bir xil qiymatli elementlar indeksini chiqaruvchi programma tuzilsin.

// Array19. n ta elementdan tashkil topgan massiv berilgan. Massivda eng ko'p qatnashgan bir xil qiymatli elementni va uning sonini chiqaruvchi programma tuzilsin.

// Array20. n ta elementdan iborat butun sonlardan tashkil topgan a massiv berilgan. a massivning juft elementlaridan tashkil topgan b massivini hosil qiling. b massiv elementlari soni va elementlari chiqarilsin.

// Array21. n ta butun sonlardan iborat a massiv va k butun soni berilgan. Massivning har bir elementini k ga orttiruvchi programma tuzilsin.

// Array22. n ta elementdan iborat massiv berilgan (n juft son). Massivning birinchi yarmi va ikkinchi yarmi qiymatlari almashtirilsin.

// Array23. n ta elementdan iborat massiv berilgan. Massivning elementlari teskari tartibda joylashtirilsin. (DIQQAT: Sizdan teskari tartibda chiqarish talab qilinayotgani yo'q. a[0] element a[n-1] bilan almashsin, va hakazo, teskari tartibda joylashtirish talab qilinyapti)

// Array24. n ta butun sonlardan iborat a massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.

// Array25. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini bir qadam chapga siklik siljituvchi programma tuzilsin. a[n-1] element qiymati a[n-2] ga o'tadi, a[n-2] esa a[n-3] ga, ... a[0] esa a [n-1] ga o'tadi.

// Array26. n ta elementdan tashkil topgan massiv va k butun soni berilgan (0<= k < n). Indeksi k ga teng bo'lgan elementni o'chiruvchi va yangi massiv qaytaruvchi deleteElementWithIndex(arr, k) nomli funksiya tuzilsin.

// Array27. n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.

// Array28. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsin.

// Array29. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.
// Input: [1, 5, 6, 1, 5, 7, 2]
// Output: [6, 7, 2]

// Array30. arr nomli massivda k qiymatli bir nech element mavjude. Shu elementlar indekslari massividan iborat qiymat qaytaruvchid searchAllElements(arr) nomli funksiya hosil qiling !

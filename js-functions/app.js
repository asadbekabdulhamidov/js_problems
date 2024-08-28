// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin
// va ularning yig’indisini qaytarib bersin.

// function calcFunc(x, y) {
//   return x + y;
// }

// let result = calcFunc(3, 4);
// console.log(result);

// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga
// o’girib beradigan funksiya yasang.

// function toSecond(min) {
//   return min * 60;
// }

// let result = toSecond(2);

// console.log(result);

//==================================
// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun
// sondan keyingi sonni qaytarsin.

// function nextInteger(num) {
//   return num + 1;
// }
// let result = nextInteger(9);

// console.log(result);

//========================================

// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
// Funksiya uchburchakning yuzini hisoblab qaytarsin.
// Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2

// function uchburchakYuzi(asos, balandlik) {
//   let s = (asos * balandlik) / 2;
//   return s;
// }

// let result = uchburchakYuzi(4, 9);
// console.log(result);

//===================================
// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// oling.

// function ageToDays(year) {
//   return year * 365;
// }

// let result = ageToDays(24);

// console.log(result);

//==================================================

// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana
// qismini yozing.

// kub(3) ᔍ 27
// kub(5) ᔍ 125
// // kub(10) ᔍ 1000

// function toKub(num) {
//   return num ** 3;
// }
// let result = toKub(5);
// console.log(result);

// //==============================
// 7.Massivni ichidan birinchi elementini qaytaradigan funksiya
// yasang.

// function firstElement(arr) {
//   return arr[0];
// }

// let result = firstElement([1, 2, 2, 3]);

// console.log(result);
//=======================================
// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
// qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.

// function calcNumber(x, y) {
//   return x * y;
// }

// let result = calcNumber(2, 2);

// console.log(result);

//===========================================
// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
// funksiya yasang.

// function hourToSecond(hour) {
//   return hour * 60 * 60;
// }

// let result = hourToSecond(2);

// console.log(result);

//=======================================

// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1

// function uchinchiTomon(tomon1, tomon2) {
//   let tomon3 = tomon1 + tomon2 - 1;
//   return tomon3;
// }

// let result = uchinchiTomon(9, 10);
// console.log(result);

//==============================

// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
// funksiya yasang.

// let qoldiq = function (num1, num2) {
//   return num1 % num2;
// };

// let result = qoldiq(10, 3);

// console.log(result);

//=======================================

// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang. Formula S = bo’yi * eni

// let yuza = function (boyi, eni) {
//   return boyi * eni;
// };

// let result = yuza(4, 4);

// console.log(result);

//=====================================

// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin.

// let stringQoshish = function (str1, str2) {
//   return str1 + " " + str2;
// };

// let result = stringQoshish("Something", "bob john");

// console.log(result);

//======================================

// Quyidagi namunalarga qaragan holatda funksiya yasang.
// Namuna:
// kvadrat(5) ᔍ 25
// kvadrat(9) ᔍ 81
// kvadrat(100) ᔍ 10000

// let caclFunc = function (num) {
//   return num ** 2;
// };

// let result = caclFunc(5);

// console.log(result);

//=============================

// DASTURLASHDAN MASALALAR
// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.

// let noldan = function (num) {
//   if (num != 0) return true;
//   else return false;
// };

// let result = noldan(2);

// console.log(result);

//====================================

// 16.Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180

// let ichkiBurchaklar = function (num) {
//   let s = (num - 2) * 180;
//   return s;
// };

// let result = ichkiBurchaklar(8);

// console.log(result);

//===============================

// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar
// mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.

// let ochkolar = function (num1, num2) {
//   let ochko = num1 * 2 + num2 * 3;
//   return ochko;
// };

// let result = ochkolar(2, 3);

// console.log(result);

// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang.
// Namuna:
// nameString("Mubashir") ᔍ "MubashirEdabit"
// nameString("Matt") ᔍ "MattEdabit"
// nameString("javaScript") ᔍ "javaScriptEdabit"

// let strQoshish = function (str1) {
//   return str1 + "Edabit";
// };

// let result = strQoshish("Mubashshir");

// console.log(result);

//========================================

// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang.

// let calcNumber = function (num1, num2) {
//   //   if (num1 + num2 < 100) return true;
//   //   else return false;

//   return num1 + num2 < 100 ? true : false;
// };

// let result = calcNumber(90, 11);

// console.log(result);

//======================================
// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
// Namuna:
// printArray(1) ᔍ [1]
// printArray(3) ᔍ [1, 2, 3]
// printArray(6) ᔍ [1, 2, 3, 4, 5, 6]

// let pushArr = function (num) {
//   let arr = [];
//   for (let i = 1; i <= num; i++) {
//     arr.push(i);
//   }

//   return arr;
// };

// let result = pushArr(8);

// console.log(result);

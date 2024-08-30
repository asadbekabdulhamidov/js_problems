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

//=============================

// Func1. Tomoni a va b ga teng bo’lgan to’g’ri to’rtburchakning
//yuzasi va perimetrini hisoblovchi rectangle(a, b) nomli funksiya hosil qiling.QYM
// Input: rectangle (6, 9)
// Output: 54, 30

// const rectangle = (a, b) => {
//   let s = a * b;
//   let p = (a + b) * 2;
//   return `${s},${p}`;
// };

// let result = rectangle(6, 9);
// console.log(result);

//=========================

// Func2. Tomoni a ga teng bo’lgan teng tomonli
//uchburchakning yuzasi va perimetrini hisoblovchi triangle(a) nomli funksiya hosil qiling.QYM
// triangle (6)

// function triangle(a) {
//   const perimeter = 3 * a;

//   // Yuzasi (formula: S = (sqrt(3) / 4) * a^2)
//   const area = (Math.sqrt(3) / 4) * Math.pow(a, 2);

//   return {
//     perimeter: perimeter,
//     area: area,
//   };
// }

// const result = triangle(6);
// console.log("Perimetr:", result.perimeter);
// console.log("Yuza:", result.area);

//==========================================
// Func3.  1 dan n ga sonlar yig’indisini qaytaruvchi sum(n) nomli funksiya hosil qiling. QY
// const sum = (n) => {
//   let s = (n * (n + 1)) / 2;
//   return s;
// };

// let result = sum(10);
// console.log(result);

//==============================================

// Func4. isSquare (k) mantiqiy funksiyasini hosil qiling. (k > 0).
//Agar k biror butun sonning kvadrati bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isSquare(10) => false
// isSquare(25) => true

// const isSquare = (k) => {
//   for (let i = 1; i <= k; i++) {
//     if (i ** 2 === k) return true;
//   }

//   return false;
// };

// let result = isSquare(20);
// console.log(result);

//======================================

// Func5. Butun qiymat qaytaruvchi digitCount(k) funksiyasini hosil qiling.
//(k > 0).Funksiya k ning raqamlari sonini qaytarsin.QY
// digitCount(8791) => 4

// const digitCount = (k) => {
//   return k.toString().length;
// };

// let result = digitCount(1234);
// console.log(result);

// Func6. n natural sonning raqamlari yig'indisini hisoblovchi getDigitSum(n)
// nomli funksiya hosil qiling.QY
// getDigitSum (456) => 15

// const getDigitSum = (n) => {
//   let arr = n.toString().split("").map(Number);
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     count += arr[i];
//   }
//   return count;
// };
// let result = getDigitSum(456);

// console.log(result);

//====================================

// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi.

// const oyoqlar = (tovuq, qoy, sigir) => {
//   let count = tovuq * 2 + sigir * 4 + qoy * 4;
//   return count;
// };

// let result = oyoqlar(2, 3, 5);
// console.log(result);

//========================

// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga
// muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!
// Namuna:
// and(true, false) ᔍ false
// and(true, true) ᔍ true
// and(false, true) ᔍ false
// and(false, false) ᔍ false

//===========================

// const and = (arg1, arg2) => {
//   return arg1 && arg2;
// };

// let result = and(true, true);

// console.log(result);

//=======================================

// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa
// teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala
// qiymatning ma’lumot turi bir xil bo’lsin.

// let tengMi = (num1, num2) => {
//   return num1 === num2;
// };

// let result = tengMi(2, 2);

// console.log(result);

//=========================================

// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda
// funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini
// qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta
// mag’lubiyat = 0 ochko hisoblanadi.

// const futbolOchko = (yutish, durrang, maglub) => {
//   let count = yutish * 3 + durrang * 1 + maglub * 0;
//   return count;
// };

// let result = futbolOchko(2, 2, 2);
// console.log(result);

//====================================================

// 25.Funskiya soatlar va minutlarni argument sifatida qabul
// qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib
// ularning yig’indisini qaytarsin.

// const seconds = (hour, min) => {
//   let count = hour * 60 * 60 + min * 60;
//   return count;
// };

// let result = seconds(1, 3);
// console.log(result);

//===========================================
// 27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar
// ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi
// jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat
// qaytarsin

// const tengMi = (data1, data2) => {
//   return data1 === data2;
// };

// let result = tengMi("1", "1");

// console.log(result);

//=============================

// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki
// berilgan qiymatni qaytarsin.

// const arrowFunc = (num) => {
//   return num;
// };

// let result = arrowFunc(1);
// console.log(result);
//==============================
// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu
// 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya
// minutlar va 1 sekundda nechta framelar soni aylanishini argument
//sifatida qabul qiladi.Funksiya jami framelar sonini
// qaytarsin

// const frameSoni = (minut, frame) => {
//   let count = minut * 60 * frame;
//   return count;
// };

// let result = frameSoni(2, 60);
// console.log(result);

//==========================================
// 31.Oddiy matematik amallar ketma-ketligi string ko’rinishida
// funksiyaga argument sifatida beriladi.
//Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.

//============================================

// 32.Shunday funksiya yasangki, unda 2ta butun son argument
// qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa
// yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat
// qaytaradi. Aks hold yolg’on.

// const teng10 = (num1, num2) => {
//   if (num1 == 10 || num2 == 10 || num1 + num2 == 10) return true;
//   else return false;
// };

// let result = teng10(10, 11);
// console.log(result);

//===================================
// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim
// yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi.
// Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga
//chiqish uchun Mashina necha litr benzin bilan chiqishi
// keraglini funksiya qaytarib bersin.

// const litrMasofa = (masofa) => {
//   let sarf = masofa * 10;
//   return sarf;
// };

// let result = litrMasofa(8);

// console.log(result);

//==========================================

// 34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.
// Namuna:
// fun(3, 7) ᔍ 7
// fun(-1, 0) ᔍ 0
// fun(1000, 400) ᔍ 1000

// const kattaSon = (num1, num2) => {
//   if (num1 > num2) return num1;
//   else return num2;
// };

// let result = kattaSon(7, 9);
// console.log(result);

//=============================================

// 35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin.

// const arr = (num1, num2) => {
//   let massiv = [];
//   massiv.push(num1, num2);
//   return massiv;
// };

// let result = arr(2, 2);
// console.log(result);

//========================================================

// 36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi.
// Agar ushbu ikkala stringdagi belgilar soni bir17
// birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold
// yolg’on

// const tengStrings = (str1, str2) => {
//   return str1.length === str2.length ? true : false;
// };

// let result = tengStrings("123", "123");

// console.log(result);

//========================================

// 37.Shunday funksiya yasangki, unga string argument qilib
// beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi,
// aks holda false.

// const boshString = (str) => {
//   return str.length == 0 ? true : false;
// };

// let result = boshString("");

// console.log(result);

//=========================================

// 38.Shunday funksiya yasang.Unda butun son argument qilib
// beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true
// qaytarsin, aks holda false.

// const bolinsinBesh = (num) => {
//   return num % 5 == 0 ? true : false;
// };

// let result = bolinsinBesh(45);

// console.log(result);

//=============================================

// 39.Shunday funksiya yasang.Unda butun son argument qilib
// beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true
// qaytarsin, aks holda false.

// const bolinsin100 = (num) => {
//   return num % 100 == 0 ? true : false;
// };

// let result = bolinsin100(1000);
// console.log(result);

//============================================

// 41.Funksiya 2ta argument qabul qiladi. Birinchi argument
// ikkinchi argumentdan katta emas. Agar birinchi argumentni
// ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false

// const bolinsin = (num1, num2) => {
//   return num1 % num2 == 0 ? true : false;
// };

// let result = bolinsin(99, 11);

// console.log(result);

//==============================================

// 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu
// ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib
// bersin.

// const raqam = (str) => {
//   return Number(str);
// };

// let result = raqam("123");
// console.log(result);

//========================================

// 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang.
// Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak)
// tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak,
// agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.

// const tortburchakYuzi = (a, b) => {
//   if (a > 0 && b > 0) {
//     return a * b;
//   } else return "tomonlardan biri notogri";
// };

// let result = tortburchakYuzi(0, 2);

// console.log(result);

//=============================================

// 44.Funksiyaga ism va familiya argument qilib berilsa, funksiya
// “ism, familiya” formatdagi string qaytarsin.
// function ismFam(ism, familiya) {
// // code...
// }
// Namuna:
// ismFam("First", "Last") ᔍ "Last, First"

// const ismFam = (ism, fam) => {
//   return ism + ", " + fam;
// };

// let result = ismFam("asadbek", "Abdulhamidov");
// console.log(result);

//===============================================

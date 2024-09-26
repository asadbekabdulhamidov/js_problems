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

// 46.Shunday funksiya yasangki, ushbu funksiya 2ta argument
// qabul qiladi. Birinchi argument massive, ikkinchi argument
// ushbu massivni boshidan boshlab nechta elementni tushurib

// qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani
// qaytarsin.
// function tushirMassiv(arr, tushirishSoni) {
//   for (let i = 0; i < tushirishSoni; i++) {
//     arr.shift();
//   }

//   return arr;
// }
// let arr = [1, 1, 2, 4, 5, 6, 6, 4];
// let result = tushirMassiv(arr, 4);
// console.log(result);

//==========================================

// 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar
// soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya
// natijani qaytarsin.

// function ovozlar(ovozObj) {
//   let count = ovozObj.upvotes - ovozObj.downvotes;
//   return count;
// }

// let result = ovozlar({ upvotes: 13, downvotes: 1 });
// console.log(result);

//==============================================

// 48.Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin.

// let negativSon = (num) => {
//   if (num > 0) return -num;
//   else if (num < 0) return Math.abs(num);
// };

// let result = negativSon(1);
// console.log(result);

//======================================

// 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab
// mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning
// yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar
// bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa
// funksiya true qaytarsin aks holda false.

// let kinogaKirish = (age, otaOna) => {
//   if (age >= 15 && otaOna) return true;
//   else return false;
// };

// console.log(kinogaKirish(11, false));

//======================================

// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har
// bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri
// yasang.

// let arr = [0, 1, 2, 3];
// let birgaOshir = arr.map((item) => (item += 1));
// console.log(birgaOshir);

//===========================================

// 52.Template string yordamida ya’ni backticlar orqali “ ushbu
// formatdagi stringni hosil qiling.

// let ism = "Asadbek";
// let familiya = "Abdulhamidov";

// let strfunc = (ism, familiya) => {
//   return `${ism} ${familiya}`;
// };

// let result = strfunc(ism, familiya);

// console.log(result);

//=========================================

// 54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi.
// juft bo’lsa funksiya true qaytarsin, aks holda false

// let str = "Asadbek Abdulhamidov";

// const sozUzunligi = function (str) {
//   if (str.length % 2 == 0) return true;
//   else return false;
// };

// let result = sozUzunligi(str);
// console.log(result);

//========================================

// 55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham
// son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni
// qaytarsin.

// const daraja = (num1, num2) => {
//   return num1 ** num2;
// };

// let result = daraja(3, 3);
// console.log(result);

//========================

// 56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning
// so’nggi elementini qaytarib bersin.

// function songiElement(arr) {
//   return arr.at(-1);
// }

// let result = songiElement([1, 2, 3, 4]);
// console.log(result);
//===============================================

// 57.Kabisa yilini aniqlaydigan funksiya yasang. Agar kiritilgan
// yil kabisa bo’lsa funksiya true qaytaradi, aks holda false. Kabisa
// yili 4ga bo’linadigan yil bo’lib, lekin 100ga bo’linsa u holda
// 400ga ham bo’linganidagina kabisa hisoblanadi.

// function kabisa(yil) {
//   if (yil % 4 == 0 && (yil % 100 !== 0 || yil % 400 == 0)) return true;
//   else return false;
// }
// let result = kabisa(2020);
// console.log(result);

//===============================
// 58.Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi
// harfisiz qaytarib bersin.

// function soz(word) {
//   return word.slice(1);
// }

// let result = soz("asadbek");
// console.log(result);

//===================================

// 59.Boolen qiymatini teskarisini qaytarib beradigan funksiya
// yasang.
// function teskariBool(bool) {
//   return !bool;
// }

// let result = teskariBool(true);
// console.log(result);

//===========================================

// 60.Funskiya son qabul qiladi, agar son juft bo’lsa funskiya “juft”
// qaytaradi, agar toq bo’lsa “toq” qaytarsin.

// function juftMiToqmi(son) {
//   if (son % 2 == 0) return "juft";
//   else return "toq";
// }
// console.log(juftMiToqmi(3));

//==============================================\

// 61.Quyidagi rasmga muvofiq qutilar teriladi. Qutilarning
// qavatiga qarab ularning soni oshib boradi.

// function qutilar(qavat) {
//   return Math.pow(qavat, 2);
// }
// let result = qutilar(2);
// console.log(result);

//=============================================

// 62.Funskiya massiv qabul qiladi, ushbu massivni ichida yoki
// stringlar yoki numberlar joyshlashgan bo’ladi. funksiya massiv
// elementlarini bitta string qilib qaytarsin.

// function arrayToString(arr) {
//   return arr.join("");
// }
// let result = arrayToString([1, 2, 3, 4]);
// console.log(result);

//============================

// 63.Funksia 2ta sonlardan iborat massiv qabul qilsa, ularni
// birlashtirib bitta massiv ko’rinishida qaytarib bersin.
// function birlash(arr1, arr2) {
//   return arr1.concat(arr2);
// }

// let result = birlash([1, 3, 5], [2, 6, 8]);
// console.log(result);

//=====================================

// 64.Funskiya 2ta argument qabul qiladi. 1-argument massiv,
// 2-argument ushbu massivning biron elementi. Funksiya ushbu
// elementning massiv ichida nechinchi indexda turishini qaytarib
// bersin

// function topIndex(arr, str) {
//   return arr.indexOf(str);
// }

// console.log(topIndex(["hi", "edabit", "fgh", "abc"], "fgh"));

//=======================================

// 65.Funksiya massive bilan index qabul qilsa, ushbu indexdagi
// massiv elementini qaytarsin.
// !!! Indexni eng kichik qiymatga qarab yaxlitlang.

// function arrElement(arr, index) {
//   return arr[Math.floor(index)];
//   // code...
// }

// let result = arrElement([1, 2, 3, 4, 5, 6], 10 / 2);
// console.log(result);

//=============================
// 66.Quyidagi namunani kuzatgan holda funksiya yasang.
// namuna([1, 2, 3, 4, 5]) ᔍ 15

// function calc(arr) {
//   let calcArr = arr.reduce((acc, item) => {
//     return (acc += item);
//   }, 0);
//   return calcArr;
// }

// console.log(calc([1, 2, 3, 4, 5]));

//===================================
//.Funksiya tekshirisin, agar unga berilgan stringda bo’sh joy
// mavjud bo’lsa true qaytarsin, aks holda false.
// function boshJoy(str) {
//   // code...
//   let arr = str.split("").includes(" ");
//   return arr;
// }

// let result = boshJoy("hello, world");
// console.log(result);

//===========================

// Funksiya biron qutining olchamlari ma’lumotlarini object
// sifatida qabul qiladi. funksiya ushbu qutining hajmini qaytarib
// bersin. Hajm = Balandlik * Eni * Uzunlik

// function hajm(quti) {
//   let Hajm = quti.width * quti.length * quti.height;
//   return Hajm;
// }

// let result = hajm({ width: 2, length: 5, height: 1 });
// console.log(result);

//======================================
// 1-masala foydalanuvchi kiritgan Ihtiyoriy sonning 3 -darajasini
//hisoblovchi funksiya hosil qiling va natijani consolda chiqaring

// function calcCub(num) {
//   return num ** 3;
// }
// let result = calcCub(3);
// console.log(result);

//================================

// 2-masala foydalanuvchi kiritgan Ihtiyoriy sonning 2, 3, 4
//-darajasini hisoblovchi funksiya hosil qiling va natijani
//consolda chiqaring

// function calcPow(num) {
//   let kv = num ** 2;
//   let cub = num ** 3;
//   let pow4 = num ** 4;
//   return [kv, cub, pow4];
// }
// let result = calcPow(3);
// console.log(result);

// 3-masala ikkita sonning o`rta arifmetigin hisoblovchi
//funksiya hosil qiling va natijani consolda chiqaring

// let ortaArifmetik = function (num1, num2) {
//   let orta = Math.floor((num1 + num2) / 2);
//   return orta;
// };

// let result = ortaArifmetik(3, 5);
// console.log(result);
//===================================================

// 4-masala Teng tomonli uch burchakning yuzasi va perimetrini
// hisoblovchi  funksiya
// hosil qiling va natijani consolda chiqaring

// let uchburchakYuziPerimetri = (tomon1, tomon2, tomon3) => {
//   let p = tomon1 + tomon2 + tomon3;
//   let yarimPer = p / 2;
//   let s = Math.sqrt(
//     yarimPer * (yarimPer - tomon1) * (yarimPer - tomon2) * (yarimPer - tomon3)
//   );
//   return { perimetr: p, yuzasi: s };
// };
// let result = uchburchakYuziPerimetri(3, 3, 3);
// console.log(result);

//=====================================

// 5-masala to'g'ri to'riburchakning yuzini va perimetrini
//hisoblovchi funksiya hosil qiling va natijani consolga chiqaring

// let tortBUrchakYuziPer = (a, b) => {
//   let p = (a + b) * 2;
//   let s = a * b;

//   return [p, s];
// };

// let result = tortBUrchakYuziPer(10, 20);
// console.log(result);

//==================================

// 6-masala ikkita sonning qiymatini almashtiruvchi
//Swap nomli funksiya hosil qiling va natijani consolga chiqaring.

// function swap(num1, num2) {
//   let temp = num1;
//   num1 = num2;
//   num2 = temp;
//   return [num1, num2];
// }

// let result = swap(3, 6);
// console.log(result);

// 7-masala   X va Y sonlaridan kichigini X ga va kattasini Y ga
//yozuvchi Minmax(X, Y) funksiyasini
// hosil qiling va natijani consolga chiqaring

// function MinMAx(x, y) {
//   if (x < y) {
//     return { x, y };
//   } else {
//     let temp = x;
//     x = y;
//     x = temp;

//     return [x, y];
//   }
// }

// let result = MinMAx(9, 4);
// console.log(result);

//=========================================

// 8-masala foydalanuvchidan ketma ket olingan 3 ta  sonlarni
// o'sish tartibida joylashtiruvchi Sort funksiyasini hosil
// qiling. Ya'ni A, B, C sonlari qiymatlarini shunday almashtiringki, natijada A ning qiymati eng kichik va C ning qiymati eng katta bo'lsin.

// let sort = (a, b, c) => {
//   let arr = [a, b, c];
//   let sortedArr = arr.sort((a, b) => {
//     return a - b;
//   });

//   return sortedArr;
// };

// let result = sort(6, 4, 7);
// console.log(result);

//=================================================

// 9-masala  A, B, C sonlarini kamayish tartibida joylashtiruvchi  funksiya hosil
// qiling. Ya'ni A, B, C sonlari qiymatlarini shunday
//almashtiringki, natijada A ning qiymati eng katta va С
// ning qiymati eng kichik bo'lsin.

// let sort = (a, b, c) => {
//   let arr = [a, b, c];
//   let sortedArr = arr.sort((a, b) => {
//     return b - a;
//   });

//   return sortedArr;
// };

// let result = sort(6, 4, 7);
// console.log(result);

//==================================================
// 10-masala  Chapga siklik siljishni amalga oshiruvchi funksiya hosil qiling.
// Ya'ni C ning qiymati B ga, B ning qiymati A ga, A ning
//qiymati C ga o'tib qolsin va natija consolga chiqarilsin

// function sikl(a, b, c) {
//   let temp = a;
//   a = c;
//   c = b;
//   b = temp;
//   console.log(a, b, c);
// }

// 11- masala Haqiqiy sonning ishorasini aniqlovchi
// ishora nomli funksiya hosil qiling.Funksiya
// argumenti noldan kichik bo'lsa -1;
// noldan katta bo'lsa 1;
// nolga teng bo'lsa 0 qiymat qaytarsin.

// let ishora = (num) => {
//   if (num < 0) return -1;
//   else if (num > 0) return 1;
//   else return 0;
// };

// console.log(ishora(-4));

//=================================

// 12-masala Doiraning yuzini hisoblovchi funksiya hosil qiling.

// let doiraYuzi = (r) => {
//   let PI = 3.14;
//   let S = PI * r ** 2;
//   return S;
// };

// console.log(doiraYuzi(10));

//===============================

// 13-masala O'ngga siklik siljishni amalga oshiruvchi  funksiyasini hosil qiling.
// Ya'ni A ning qiymati B ga, В ning qiymati C ga, C ning qiymati A ga o'tib qolsin.

// let sikl = function (a, b, c) {
//   let temp = c;
//   c = b;
//   b = a;
//   a = temp;
//   console.log(a, b, c);
// };

// sikl(1, 2, 3);

// 14-masala Butun sonning juft — toqligini aniqlovchi Even(K) funksiyasini hosil qiling. Funksiya K juft
// son bo'lsa - true, aks xolda false qiymat qaytarsin. Bu funksiya orqali 3 ta sonning juft yoki toqligi
// aniqlansin.

// let Even = (k) => {
//   if (k % 2 == 0) return true;
//   else return false;
// };

// console.log(Even(-2));

//==========================================

// 15) shunday funksiya yaratingki funksiya parametri
//sifatida jo'natilgan ikkita har xil sonni o'rta arifmetigi
//va o'rta geometrigi yog'indisini konsolga chiqarsin

// let calc = (x, y) => {
//   let ortaArif = (x + y) / 2;
//   let ortaGeometrik = Math.sqrt(x * y);
//   return { ortaArif, ortaGeometrik };
// };

// let result = calc(5, 5);
// console.log(result);

//==========================================

// 16) shunday funksiya yaratingki parametr sifatida
// jio'natilgan sonni 3-darajasi ya'ni kubini consolega chiqarsini

// let calcNum = (num) => {
//   return Math.pow(num, 3);
// };

// console.log(calcNum(3));

//==============================================

// 17)  shunday funksiya yaratingki mevalar nomidan tashkil
// topgan array ichidan length yani uzunligi funcsiya parametri
//sifatida jo'natilgan sondan  kattalarini filter qilib bersin.

// function getName(arr, n) {
//   let newArr = arr.filter((item) => item.length > n);
//   return newArr;
// }
// let result = getName(["olma", "anor", "banana", "nok"], 3);
// console.log(result);

// HOMEWORK

// 1.Funksiya qabul qilingan satrda har bir so'zning
//birinchi harfini katta qilib consolega chiqaring

// let kattaHarf = (str) => {
//   let arr = str.split(" ");
//   let newStr = arr.map((item) => {
//     return item.charAt(0).toUpperCase() + item.slice(1);
//   });

//   return newStr;
// };
// let result = kattaHarf("salom men frontend dasturchi");
// console.log(result);

//==================================

// 2.Funksiyaga jo'natilgan sonlar massivining
// har bir elementini kvadratga oshiradigan funksiya yozing.
// let kvElement = (arr) => {
//   let newArr = arr.map((item) => item ** 2);
//   return newArr;
// };
// let arr = [1, 2, 3, 4, 5, 6];
// let result = kvElement(arr);
// console.log(result);

//=========================================

// 3. Massivni teskari aylantirish
// Berilgan massivni teskari qilib qaytaradigan funksiya yozing.

// let teskariMassiv = function (arr) {
//   return arr.reverse();
// };

// let result = teskariMassiv([1, 2, 3, 4]);
// console.log(result);

//==========================================
// 4. Katta va kichik harflarni almashtirish
// Berilgan satrda har bir harfni katta yoki kichik harfga almashtiradigan funksiya yozing.

// 5.Berilgan sonlar massivida eng katta va eng kichik
//sonni topadigan funksiya yozing.

// let minMax = (arr) => {
//   let minItem = Math.min(...arr);
//   let maxItem = Math.max(...arr);

//   return { minItem, maxItem };
// };

// let result = minMax([1, 3, 4, 5, 8]);
// console.log(result);

//=================================================

// 6.Satr va harf qabul qiladigan funksiya yarating
//Berilgan satrda o'sha harf necha marta takrorlanganini
//aniqlasin.

// let harfCount = (str, harf) => {
//   let count = 0;
//   for (let i of str) {
//     i == harf ? count++ : (count += 0);
//   }
//   return count;
// };

// let result = harfCount("salom men Asadbek Abdulhamidov", "a");
// console.log(result);

//===============================

// 7. Berilgan sonlar massivida faqat juft sonlarni
//qaytaradigan funksiya yozing.

// let oddNumber = (arr) => {
//   let oddArr = arr.filter((item) => item % 2 == 0);
//   return oddArr;
// };
// let result = oddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(result);

//====================================

// 8. Massivdagi stringlarni uzunligi bo'yicha saralash

// let strArr = ["javascript", "python", "java", "ruby", "react"];

// let strUzunligi = (arr) => {
//   let newArr = arr.sort((a, b) => a.length - b.length);
//   return newArr;
// };
// let result = strUzunligi(strArr);

// console.log(result);

//============================

// Berilgan satrlar massivini so'z uzunligi bo'yicha o'sish tartibida saralovchi funksiya yozing.
// Ps: sort() va length methodlaridan foydalaning.

// let strArr = ["javascript", "python", "java", "ruby", "react"];

// let strUzunligi = (arr) => {
//   let newArr = arr.sort((a, b) => b.length - a.length);
//   return newArr;
// };
// let result = strUzunligi(strArr);

// console.log(result);

//========================================
// 9. Berilgan satrning birinchi va oxirgi belgisini
//almashtiradigan funksiya yozing.

// let str = "salom";

// let almashtirish = (str) => {
//   let firstEl = str[0];
//   let lastEl = str[str.length - 1];
//   let middleEls = str.slice(1, -1);
//   return lastEl + middleEls + firstEl;
// };

// let result = almashtirish(str);
// console.log(result);

//===================================

// 10. Ikkita massivning umumiy elementlarini qaytaradigan
// funksiya yozing.

// let umumiyArr = (arr1, arr2) => {
//   return arr1.concat(arr2);
// };

// let arr1 = [1, 2, 3, 4, 5],
//   arr2 = [6, 7, 8, 9, 10];
// let result = umumiyArr(arr1, arr2);
// console.log(result);

//===================================

// 11. Sonlar massivini o'sish bo'yicha saralash
// Berilgan sonlar massivini o'sish tartibida
//saralaydigan funksiya yozing.

// let osishTartibi = (arr) => {
//   let newArr = arr.sort((a, b) => a - b);
//   return newArr;
// };

// let arr = [5, 2, 9, 1, 7];
// let result = osishTartibi(arr);
// console.log(result);

//===========================================

// 12. Massiv elementlarini birlashtirish
// Berilgan satrlar massivini yagona satrga birlashtiradigan funksiya yozing.
// Ps: join() metodidan foydalaning.

// let strBirlashtirish = (arr) => {
//   let str = arr.join("");
//   return str;
// };
// let arr = [
//   "s",
//   "a",
//   "l",
//   "o",
//   "m",
//   " ",
//   "m",
//   "e",
//   "n",
//   " ",
//   "j",
//   "s",
//   " ",
//   "m",
//   "a",
//   "s",
//   "t",
//   "e",
//   "r",
// ];
// let result = strBirlashtirish(arr);
// console.log(result);

// /==================================

// 13. Massiv ichida aniq qiymat borligini tekshirish
// Berilgan qiymat massivda bor yoki yo'qligini aniqlaydigan funksiya yozing.

// const includEl = (arr, item) => {
//   return arr.includes(item);
// };

// let arr = [1, 3, 4, 5, 6, 6];
// let result = includEl(arr, 3);
// console.log(result);

//=====================================
// 14. Massiv ichidagi unikal elementlarni topish
// Berilgan massiv ichida faqat takrorlanmagan elementlarni qaytaradigan funksiya yozing.

// const unikalArr = (arr) => {
//   return arr.filter(
//     (item, index) => arr.indexOf(item) === arr.lastIndexOf(item)
//   );
// };

// let arr = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7];
// let result = unikalArr(arr);
// console.log(result);

//=========================================

// 15. Massivdagi juft sonlar sonini sanash
// Berilgan massiv ichida nechta juft son borligini aniqlaydigan funksiya yozing.

// const oddNumberCount = (arr) => {
//   let count = 0;
//   arr.forEach((item) => {
//     if (item % 2 == 0) count++;
//   });

//   return count;
// };
// let arr = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7];
// let result = oddNumberCount(arr);
// console.log(result);

//====================================

// 16. Birinchi harfini olib tashlash
// Berilgan satrdagi birinchi harfni olib tashlaydigan
// funksiya yozing.

// const birinchiHarf = (str) => {
//   return str.slice(1);
// };

// let result = birinchiHarf("codial");
// console.log(result);

//=======================================

// 17. So'zlarni teskari tartibda chiqarish
// Berilgan satrni so'zlar teskari tartibda bo'lgan
// holatda qaytaradigan funksiya yozing.

// const teskari = (str) => {
//   return str.split(" ").reverse().join(" ");
// };
// let str = "salom men codial talabasiman";
// let result = teskari(str);
// console.log(result);

//=====================================

// .Funksiya son1, son2 va massiv qabul qiladi. Funksiya ushbu
// massivni ichidan son1dan katta va son2dan kichik sonlarni
// ajratib olib yangi massiv qaytarsin. Bunda son1 doim son2dan
// kichik.
// function sonlar(son1, son2, arr) {
//   let newArr = arr.filter((item) => son1 < item && son2 > item);
//   return newArr;
// }

// console.log(sonlar(3, 8, [1, 5, 95, 0, 4, 7]));

//========================================
// 75.Funksiya massiv qabul qiladi. Ushbu funksiya unga berilgan
// massiv elementlariga mos o’rinda joylashgan elementlarning
// turini saqlagan massiv qaytarsin.

// function turlar(arr) {
//   // code...
//   let newArr = arr.map((item) => typeof item);
//   return newArr;
// }

// let result = turlar([1, 2, "null", []]);
// console.log(result);

//========================================
// 76.Funskiya string va number qabul qiladi. Funksiya ushbu
// stringni berilgan son miqdoricha qayta-qayta yozib natijani
// string ko’rinishida qaytarsin.

// function qaytarString(str, miqdor) {
//   return str.repeat(miqdor);
//   // code...
// }

// let result = qaytarString("salom", 2);
// console.log(result);

//===================================================
// 77.Funksiyaga so’z kiritilsa, agar ushbu so’z ko’plikda bo’lsa
// funksiya true qaytarsin, aks holda false.

// function koplik(str) {
//   // code...
//   return str.endsWith("lar");
// }
// console.log(koplik("daraxtlar"));

//=============================

// 78.Funksiya string qabul qiladi. Ushbu funksiya ushbu stringni
// bosh va oxirgi harflarini birlashtirgan stringni qaytarsin.
// function boshOxiri(str) {
//   let soz = str[0] + str[str.length - 1];
//   return soz;
//   // code...
// }

// let result = boshOxiri("salom");
// console.log(result);

//==================================

// 80.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// ahvol("happy") ᔍ "Today, I am feeling happy"

// const ahvol = (str1, str2) => {
//   return str1 + " " + str2;
// };
// let str1 = "Today, I am feeling";
// let str2 = "happy";

// let result = ahvol(str1, str2);
// console.log(result);

//===================================

// 82.Funskiyaga belgi kiritilsa ushbu belgining ASCII kodini
// qaytarsin.
// function ascii(belgi) {
//   // code...

//   return belgi.charCodeAt();
// }
// console.log(ascii("A"));

//============================================

// 83.Funksiyaga 2ta so’z beriladi, anashu 2ta so’z bir-biriga teng
// bo’lsa true qaytsin, aks holda false. Bunda ikkala so’zining katta
// yoki kichik harflarda yozilgani ahamiyatsiz deb oling.

// function tengmi(soz1, soz2) {
//   // code...
//   if (soz1.toLowerCase() === soz2.toLowerCase()) return true;
//   else return false;
// }
// let str1 = "hello";
// let str2 = "HeLLo";
// let result = tengmi(str1, str2);
// console.log(result);

//==============================================
// 84.Funksiyaga so’z berilsa, funksiya ushbu so’zining nechta
// belgidan iborat ekanligini qaytarsin. Bunda string.length
// propertisizdan foydalanish mumkin emas !!!
// function findLengthWithoutLength(str) {
//   let count = 0;
//   let index = 0;

//   // Har bir belgini topamiz va sanab boramiz
//   while (str[index] !== undefined) {
//     count++;
//     index++;
//   }

//   return count;
// }

// // Misol
// let word = "hello";
// console.log(findLengthWithoutLength(word)); // 5

// function findLengthWithoutLength(str) {
//   let count = 0;

//   str.split("").forEach((item) => {
//     count++;
//   });
//   return count;
// }

// // Misol
// let word = "hello";
// console.log(findLengthWithoutLength(word));

//=================================================

// 86.Quyidagi namunani kuzatgan holda funkisya yasang.
// Namuna:
// namuna([2, 5, 3]) ᔍ [4, 10, 6]

// const ikkigaOshir = (arr) => {
//   let newArr = arr.map((item) => item * 2);
//   return newArr;
// };
// let arr = [2, 3, 5];
// let result = ikkigaOshir(arr);
// console.log(result);

//=========================================
// 87.Funksiya so’zlar massivini qabul qiladi. Funksiya ana shu
// so’zlarning uzunligidan iborat bo’lgan yangi massiv qaytarsin.
// Namuna:
// wordLengths(["hello", "world"]) ᔍ [5, 5]

// const wordLengths = (arr) => {
//   let newArr = arr.map((item) => item.length);
//   return newArr;
// };
// console.log(wordLengths(["hello", "world"]));

//================================================

// 88.Taksi kilometriga 1000 so’mdan haq oladi. Lekin birinchi
// kilometri 4000 so’m. Agar funksiya taksiga to’langan yakuniy
// summani qabul qilsa. Funksiya taksining necha kilometr
// yurganini qaytarsin

// const findKilometrs = (summa) => {
//   if (summa <= 4000) {
//     return 1;
//   } else {
//     let minimalka = summa - 4000;

//     return minimalka / 1000 + 1;
//   }
// };

// let result = findKilometrs(7000);
// console.log(result);

//==========================================
// Funksiya matn qabu qilsa, ushbu funksiya ushbu matnda “d”
// harfi nechi marta ishtirok etganligini qaytarsin. “d” harfining
// katta kichikligini ahamiyati yo’q.

// const dlar = (soz) => {
//   let count = 0;
//   for (let i of soz) {
//     if (i == "d" || i == "D") count++;
//   }
//   return count;
// };

// let result = dlar("My friend Dylan got distracted in school.");
// console.log(result);

//===================================
// 90.Funksiya string qabul qiladi. Va har belgini orasiga bo’sh joy
// qo’yib qaytarsin.

// const boshJoy = (str) => {
//   let arr = str
//     .split("")
//     .map((item) => item + " ")
//     .join("");
//   return arr;
// };
// console.log(boshJoy("salom"));

//======================

// 92.Agar men cafedan 3ta kofe olsam yana 1ta tekinga qo’shib
// berishadi. Funksiya nechta kofe olsam meni qo’limda jami
// nechta kofe bo’lishini qaytarsin.

// const kofee = (num) => {
//   let freeCoofee = Math.floor(num / 3);
//   return freeCoofee + num;
// };
// console.log(kofee(10));

//======================================

// 93.Funksiyaga string va son berilsa, ushbu stringning oxirigi
// belgisini funksiya son marta takrorlab qaytarib bersin.

// function takrorlash(str, num) {
//   let oxirgiEl = str[str.length - 1];
//   for (let i = 1; i < num; i++) {
//     str += oxirgiEl;
//   }
//   return str;
// }
// console.log(takrorlash("hello", 3));

//==================================
// 94.Funksiyaga sonlar massivi berilsa, Ana shu massivdagi 5dan
// katta bo’lgan elementlarni yig’indiisini qaytarsin.

// const calc = (arr) => {
//   let count = arr
//     .filter((item) => item > 5)
//     .reduce((acc, item) => {
//       return (acc += item);
//     }, 0);
//   return count;
// };

// console.log(calc([1, 5, 20, 30, 4, 9, 18]));

//===========================================

// 95.Funksiyaga massiv berilsa, ushbu funksiya massiv elementlarini barchasini yig’indisini qaytarsin.

// const calcArr = (arr) => {
//   let newArr = arr.reduce((acc, item) => (acc += item));
//   console.log(newArr);
// };

// console.log(calcArr([2, 7, 4]));

//========================================

// 96.Funksiyaga faylning manzili kiritiladi. Funksiya ushbu
// ma’lumotdan faylining nomi ajratib bersin.

// const getFayl = (str) => {
//   let arr = str.split("/").at(-1);
//   return arr;
// };

// let result = getFayl("C:/Projects/pil_tests/ascii/edabit.txt");
// console.log(result);

//=============================================

// 97.Doston uyidan masofalar bosib o’tadi. Uyidan yo oldinga
// yoki orqaga. Bosib o’tilgan masoflar massivi funksiya berilsa,
// funksiya Doston uyiga qaytishi uchun qancha masofa bosib otishi aytilsin

// const calcMasofa = (arr) => {
//   let count = arr.reduce((acc, item) => {
//     return (acc += Math.abs(item));
//   }, 0);

//   return count;
// };

// let arr = [-1, -4, -3, -2];
// let result = calcMasofa(arr);
// console.log(result);

//========================================

// 98.Funksiya uchburchakning tomonlari argument qilib beriladi.
// Agar ushbu berilgan tomonlardan uchburchak yasab bo’lsa
// unda funksiya true qaytarsin, aks holda false. Uchburchakning
// qoida, istalgan 2ta tomonining yig’igindisi uchunchi tomondan
// katta bo’lsagina uchburchak hosil bo’ladi.

// const uchburchak = (x, y, z) => {
//   if (x + y > z || y + z > x || z + x > y) {
//     return true;
//   }
// };
// console.log(uchburchak(2, 2, 3));

//====================================

// 99.Funksiya 2 son oralig’gini qabul qilsa, ushbu 2ta son
// orasidagi sonlardan tuzilgan massivni ushbu funksiya
// qaytarsin.

// const getArr = (num1, num2) => {
//   let arr = [];
//   for (let i = num1; i < num2; i++) {
//     arr.push(i);
//   }
//   return arr;
// };
// console.log(getArr(2, 9));

// /========================================

// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") ᔍ "<div></div><div></div>"

// function generateTags(input) {
//   // Satrni '*' belgisi bo'yicha ikkiga bo'lamiz
//   let parts = input.split("*");
//   let tagName = parts[0]; // Teg nomi
//   let count = parseInt(parts[1]); // Necha marta takrorlash

//   let result = "";

//   // Tegni kerakli miqdorda yaratamiz
//   for (let i = 0; i < count; i++) {
//     result += `<${tagName}></${tagName}>`;
//   }

//   return result;
// }

// // Misol:
// console.log(generateTags("div*2")); // "<div></div><div></div>"
// console.log(generateTags("span*3")); // "<span></span><span></span><span></span>"

//==========================

// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.

// const getyigindi = (n) => {
//   let sum = (n * (n + 1)) / 2;
//   return sum;
// };

// console.log(getyigindi(10));

//=======================================

// Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false

// let minMaxOraligi = (num, obj) => {
//   return obj.min < num && obj.max > num;
// };

// let result = minMaxOraligi(4, { min: 0, max: 5 });
// console.log(result);

//=============================================

// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng bo’lsa funksiya true qaytarsin, aks holda false.
// function kvSon(num) {
//   if (num === num ** 2 % 10) {
//     return true;
//   } else return false;
// }
// console.log(kvSon(6));
//====================================

// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin

// let arr = [0, 0, 0, 0, 0, 0, 0];
// let newArr = arr.map((item, index) => {
//   return item + index;
// });

// console.log(newArr);

//==============================

// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:
// cola
// fanta

// const getShakarli = (arr, shakarli) => {
//   let newArr = arr.filter((item) => {
//     return item != shakarli[0] && item != shakarli[1];
//   });
//   return newArr;
// };
// let arr = ["fanta", "cola", "water"],
//   shakarli = ["cola", "fanta"];
// console.log(getShakarli(arr, shakarli));

//=============================

// .Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.

// const getLength = (num) => {
//   return num.toString().length;
// };

// console.log(getLength(123456));

//============================

// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.

// function kattaSon(num) {
//   let arr = num
//     .toString()
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
//   return Number(arr);
// }

// console.log(kattaSon(1902));

//============================================

// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.

// function randomNum(num1, num2) {
//   return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
// }
// console.log(randomNum(2, 6));

//========================================

// / 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son degani sonning har bir raqamini sonning uzunligi miqdorida darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.
// function narisistik(num) {
//   let strNum = String(num);
//   let sum = 0;
//   for (let i = 0; i < strNum.length; i++) {
//     sum += strNum[i] ** strNum.length;
//   }
//   if (sum === num) {
//     return true;
//   } else return false;
// }
// let num = 153;
// let result = narisistik(num);
// console.log(result);

//========================================

// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda nechta katta harf ishtirok etganin qaytarsin.
// Namuna:
// function kattaHarfSoni(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     let letter = str.charAt(i);
//     if (letter === letter.toUpperCase() && letter !== letter.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }
// let str = "TFDTUYFsdiajsof;hj;oid";
// let count = kattaHarfSoni(str);
// console.log(count);

// Boolean1. A butun soni berilgan. Jumlani rostlikka
//tekshiring: "A soni musbat".

// let a = 2;

// if (a > 0) {
//   console.log(true);
// } else console.log(false);

//========================================

// Boolean2. A butun soni berilgan.
//Jumlani rostlikka tekshiring: "A soni toq son".

// let a = 4;

// if (a % 2 == 1) console.log(true);
// else console.log(false);

//=====================================

// Boolean3. Ikkita butun A va B sonlari berilgan.
//Jumlani rostlikka tekshiring: "A>2 va B <=3".

// let a = 3,
//   b = 2;

// if (a > 2 && b <= 3) console.log(true);
// else console.log(false);

// Boolean4. Uchta A, B, C butun sonlar berilgan.
//Jumlani rostlikka tekshiring: "A <= B <= C"

// let a = 3,
//   b = 4,
//   c = 8;

// if (a <= b <= c) {
//   console.log(true);
// } else console.log(false);

//=======================================

// Boolean5. Ikkita butun A va B sonlari berilgan.
// Jumlani rostlikka tekshiring: "A va B sonlarining har
// ikkalasi ham yoki toq son yoki juft son".

// let a = 3;
// let b = 1;

// if (a % 2 == 0 && b % 2 == 0) {
//   console.log("har ikkisi ham juft son");
// } else if (a % 2 == 1 && b % 2 == 1) console.log("har ikkisi ham toq son");
// else console.log("faqat bittasi juft");

//================================================

// Boolean6. Uchta A, B, C butun sonlar berilgan.
// Jumlani rostlikka tekshiring: "A, B, C sonlarning hech
//  bo'lmaganda bittasi musbat".

// let a = 9;
// let b = 3;
// let c = -1;

// if (a > 0 || b > 0 || c > 0) {
//   console.log("true");
// } else console.log("false");

//==========================================

// Boolean7. Uch xonali son berilgan.
// Jumlani rostlikka tekshiring: “Ushbu sonning barcha raqamlari har xil".

// let number = 331;

// let birlik = number % 10;
// let onlik = Math.floor(number / 10) % 10;
// let yuzlik = Math.floor(number / 100);
// console.log(birlik, onlik, yuzlik);

// if (birlik == yuzlik && birlik == onlik && onlik == yuzlik) {
//   console.log(`barcha raqamlar bir hil`);
// } else console.log("barcha raqam har hil");

//=============================================

// Boolean8. Jumlani rostlikka tekshiring:
// "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng".

// let a = 1;
// let b = 1;
// let c = 5;
// let counter = 0;

// if (a === b || b === c || c === a) {
//   console.log("ha hech bolmaganda  ikkitasi bir biriga teng");
// } else {
//   console.log(false);
// }

//============================

// Boolean9. A butun soni berilgan.
//Jumlani rostlikka tekshiring: "A soni juft son”.

// let A = 2;

// if (A % 2 == 0) console.log(true);
// else console.log(false);

//=================================================

// Boolean10. Ikkita butun A va B sonlari berilgan.
// Jumlani rostlikka tekshiring:
// "A >= 0 yoki B <-2"

// let a = 9;
// let b = -4;

// if (a >= 0 || b <= 0) console.log(true);
// else console.log(false);

//==================================================

// Boolean 11. Uchta A, B, C butun sonlar berilgan.
//Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".

// let a = 2;
// let b = 5;
// let c = 10;

// if (a < b && b < c) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//=======================================

// Boolean 12. Ikkita butun A va B sonlari berilgan.
//Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".

// let a = 3;
// let b = 9;

// if (a % 2 == 1 && b % 2 == 1) {
//   console.log(true);
// } else console.log(false);

//====================================

// Boolean 13. Ikkita butun A va B sonlari berilgan.
// Jumlani rostlikka tekshiring:
// "A va B sonlarning hech bo'lmaganda bittasi toq son".

// let a = 3;
// let b = 10;

// if (a % 2 == 1 || b % 2 == 1) {
//   console.log(true);
// } else console.log(false);

//=========================================

// Boolean 14. Ikkita butun A va B sonlari berilgan.
//Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".

// let a = 4;
// let b = 21;
// if ((a % 2 == 1 && b % 2 == 0) || (a % 2 == 0 && b % 2 == 1)) {
//   console.log(true);
// } else console.log(false);

//=============================================

// Boolean 15. Uchta A, B, C butun sonlar berilgan.
//  Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".

// Boolean8. Uchta A, B, C butun sonlar berilgan.
//Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".

// let a = -4;
// let b = 21;
// let c = -1;
// if (
//   (a > 0 && b < 0 && c < 0) ||
//   (a < 0 && b > 0 && c < 0) ||
//   (a > 0 && b < 0 && c > 0)
// ) {
//   console.log(true);
// } else console.log(false);

//=====================================

// Boolean 16. Uchta A, B, C butun sonlar berilgan.
//Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".

// let a = -4;
// let b = 21;
// let c = 1;
// if (
//   (a > 0 && b > 0 && c < 0) ||
//   (a < 0 && b > 0 && c > 0) ||
//   (a > 0 && b < 0 && c > 0)
// ) {
//   console.log(true);
// } else console.log(false);

//=============================================

// Boolean17 . Musbat butun son berilgan.
// Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".

// let number = 22;

// if (number < 100 && number > 9 && number % 2 === 0) console.log(true);
// else console.log(false);

//==================================

// Boolean18. Musbat butun son berilgan.
// Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq".
// let number = 233;

// if (number > 99 && number < 1000 && number % 2 == 1) {
//   console.log(true);
// } else console.log(false);

//===========================
// Boolean19. Jumlani rostlikka tekshiring:
// "Berilgan uchta butun sonlarning hech bo'lmaganda
// bir jufti o'zaro qarama-qarshi".

// let a = -2;
// let b = 2;
// let c = 9;

// if (a + b == 0 || b + c == 0 || c + a == 0) {
//   console.log(true);
// }else console.log(false)

//=====================================

// Boolean20. Uch xonali son berilgan.
// Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari
//ketama - ket o'suvchi bo'lib joylashgan".

// let num = 123;

// let birlik;
// let yuzlik;
// let onlik

// if (num >= 100 && num <= 999) {
//   birlik = num % 10;
//   onlik = Math.floor((num % 100) / 10);
//   yuzlik = Math.floor(num / 100);
// } else {
//   console.log("son uch honalik emas");
// }

// if (yuzlik + 1 == onlik && onlik + 1 == birlik) {
//   console.log(true);
// } else console.log(false);

//===================================

// Boolean21. Uch xonali son berilgan.
// Jumlani rostlikka tekshiring:
// "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib
// joylashgan yoki kamayuvchi ketma - ketlikka ega".

// let num = 123;

// let birlik;
// let yuzlik;
// let onlik;

// if (num >= 100 && num <= 999) {
//   birlik = num % 10;
//   onlik = Math.floor((num % 100) / 10);
//   yuzlik = Math.floor(num / 100);
// } else {
//   console.log("son uch honalik emas");
// }

// if (yuzlik + 1 == onlik && onlik + 1 == birlik) {
//   console.log('o"suvchi');
// } else if (yuzlik - 1 == onlik && onlik - 1 == birlik) {
//   console.log("kamayuvchi ");
// } else console.log("false");

//======================================

// Boolean22. Uch xonali son berilgan.
//Jumlani rostlikka tekshiring:
//"Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".

// let num = 232;

// if (num > 99 && num < 1000) {
//   let birlik = num % 10;
//   let onlik = Math.floor((num % 100) / 10);
//   let yuzlik = Math.floor(num / 100);
//   if (birlik === yuzlik) {
//     console.log(true);
//   } else console.log(false);
// }

//=======================================

// if1. Butun son berilgan.
// Agar, berilgan son musbat bo`lsa, 1 ga oshirilsin, aks holda
// o`zgartirilmasin.Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.

// let num = 10;

// if (num > 0) {
//   num++;
//   console.log(num);
// } else console.log(num);

//==========================

// if2. Butun son berilgan. Agar, berilgan son musbat bo`lsa,
// 1 ga oshiring, agar manfiy bo`lsa 2 ga kamaytiring. Agar 0 ga teng bo`lsa,
//     10 ni o`zlashtirsin. Hosil bo`lgan sonni ekranga chiqaruvchi programma
// tuzilsin.

// let num = 10;

// if (num > 0) {
//   num++;
// } else if (num < 0) {
//   num -= 2;
// } else {
//   num = 10;
// }

// console.log(num);

//===================================

// if3. Uchta butun son berilgan.
//Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.

// let num1 = 2;
// let num2 = -1;
// let num3 = 9;
// let counter = 0;

// if (num1 > 0) {
//   counter += 1;
// }

// if (num2 > 0) {
//   counter += 1;
// }
// if (num3 > 0) {
//   counter += 1;
// }

// console.log(counter);

//=================================

// if4. Ikkita butun son berilgan.
//Shu sonlarning kattasini aniqlovchi programma tuzilsin.

// let a = 10;
// let b = 11;

// if (a > b) {
//   console.log(`a= ${a}number big`);
// } else if (b > a) {
//   console.log(`b = ${b} number big`);
// } else console.log("teng");

//=========================================

// if6. Ikkita butun son berilgan.
//Shu sonlarning avval kattasini keyin kichigini ekranga
//chiqaruvchi programma tuzilsin.

// let a = 10;
// let b = 29;

// if (a > b) console.log(`${a}=number a, ${b}=b number`);
// else if (b > a) console.log(`${b}=b number,${a}=number a `);
// else console.log("teng");

//================================

// if7. A va B haqiqiy sonlari beringan.
// Shu sonlarni shunday o'zgartirish kerakki,
// A son kichik B son katta bo`lsin. A va B ning qiymati ekranga chiqarilsin.

// if (a > b) {
//   let temp = a;
//   a = b;
//   b = temp;
// }

// console.log("a=" + a);
// console.log("b=" + b);

//=======================================

// if8. A va B butun sonlari berilgan.
//Agar o`zgaruvchilar o`zaro teng bo`lmasa,
//A va B o`zgaruvchilari ularning yig'indisini o`zlashtirsin.
//Agar teng bo`lsa, 0 ni o`zlashtirsin.A va B ning qiymati ekranga chiqarilsin.

// let a = 10;
// let b = 11;
// if (a != b) {
//   a = a + b;
//   b = a;
// } else {
//   b = 0;
//   a = 0;
// }

// console.log(`a=${a}, b=${b}`);

//====================================

// if9. A va B butun sonlari berilgan.
//Agar o`zgaruvchilar o`zaro teng bo`lmasa,
//A va B bu sonlarning kattasini o`zlashtirsin.
//Agar teng bo`lsa, 0 ni o`zlashtirsin.A va B ning qiymati ekranga chiqarilsin.

// let a = 10;
// let b = 11;
// if (a != b) {
//   if (a > b) {
//     b = a;
//   } else {
//     a = b;
//   }
// } else {
//   a = 0;
//   b = 0;
// }

// console.log(`a=${a}, b=${b}`);

//===========================

// if10. Uchta son berilgan.
//Shu sonlarni kichigini aniqlovchi programma tuzilsin.

// let a = 10;
// let b = 99;
// let c = 82;

// if (a < b && a < c) {
//   console.log(a + "=a");
// } else if (b < a && b < c) {
//   console.log(b + "=b");
// } else {
//   console.log(c + "=c");
// }

//================================

// if11. Uchta son berilgan.
// Shu sonlarni o`ratachasi (ya'ni katta va kichik sonlar orasidagi son)
// ni aniqlovchi programma tuzilsin.

// let a = 10;
// let b = 12;
// let c = 22;

// let normalNUm = 0;

// if ((a > b && a < c) || (a < b && a > c)) {
//   normalNUm = a;
// } else if ((b > a && b < c) || (b < a && b > c)) {
//   normalNUm = b;
// } else {
//   normalNUm = c;
// }

// console.log(normalNUm);

//===============================

// if12. Uchta son berilgan. Shu sonlarning yig'indisi
// eng katta bo'ladigan ikkitasini ekranga chiqaruvchi programma tuzilsin.
// let a = 10;
// let b = 12;
// let c = 22;
// let counter = 0;

// if (a + b > counter) {
//   counter = a + b;
// }
// if (a + c > counter) {
//   counter = a + c;
// }
// if (b + c > counter) {
//   counter = b + c;
// }

// console.log(counter);

//===================================

// if15. To`rtta butun son berilgan.
//Shu sonlarni uchtasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.

// if16. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.

// agar x≤ 0 bo’lsa -x;
// agar 0<x<2; x^2
// agar x≥2 bo’lsa 4

// let x = -1;

// if (x <= 0) {
//   x = -x;
// } else if (0 < x < 2) x = x ** 2;
// else x = 4;

// console.log(x);

// let x = -1;

// let result;

// if (x <= 0) {
//   result = x;
// } else if (x > 0 && x < 2) {
//   result = x * x;
// } else {
//   result = 4;
// }

// // Natijani chiqaramiz
// console.log("Funksiya natijasi: " + result);

//=============================================

// if17. Yil berilgan (musbat butun son).
//Berilgan yilda nechta kun borligini aniqlovchi programma tuzilsin.
//Kabisa yilida 366 kun bor, kabisa bo'lmagan yilda 365 kun bor.
//Kabisa yil deb 4 ga karrali yillarga aytiladi.Lekin 100 ga karrali
//yillar ichida faqat 400 ga karrali bo'lganlari kabisa yil hisoblanadi.
//Masalan 300, 1300 va 1900 kabisa yili emas. 1200 va 2000 kabisa yili.

// let yil = 1300;

// if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

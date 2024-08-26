// For1. k va n butun sonlari berilgan (n > 0).
//k sonini n marta chiqaruvchi programma tuzilsin.

// let k = 9;
// let n = 10;

// for (let i = 1; i <= n; i++) {
//   console.log(k);
// }

//========================

// For2. Bir kg konfetning narxi berilgan (haqiqiy son).
//0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let price = 3000;

// for (let i = 1; i <= 10; i++) {
//   let kgMiqdor = i / 10;
//   let narx = kgMiqdor * price;
//   console.log(narx);
// }

//=====================================

// For3. n butun soni berilgan (n > 0).
//Quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = n^2 +(n+1)^2+(n+2)^2 + ... +(2*n)^2

// let n = 9;
// let s = 0;

// for (let i = 0; i <= n; i++) {
//   s += (n + i) ** 2;
// }
// console.log(s);

//=========================================

// For4. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// 1^N+2^(N-1) + ...+ N^1
// Input: N = 5;
// 1 ^ 5 + 2 ^ 4 + 3 ^ 3 + 4 ^ 2 + 5 ^ 1
// Output: 65

// let n = 5;
// let counter = 0;

// for (let i = 1; i <= n; i++) {
//   counter += i ** (n - i + 1);
// }

// console.log(counter);

//======================================

// For5. A va B butun soni berilgan (A < B).
//A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin.
//Bunda har bir son o'zining qiymaticha chiqarilsin.
//Ya'ni 3 soni 3 marta chiqariladi.

// let a = 2;
// let b = 6;

// for (let i = a; i <= b; i++) {
//   for (let j = 1; j <= i; j++) {
//     console.log(i);
//   }
// }

//================================

// While1. N va K butun musbat sonlari berilgan. Faqat ayirish va qo'shish amallarini ishlatib N sonini K soniga bo'lgandagi qoldiq va butun qismini aniqlovchi programma tuzilsin.

// While2. 2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n > 0). n = 2^k ni aniqlovchi programma tuzilsin.
// Input: 128
// Output: 7

// UYGA VAZIFA

// For1. a va b butun sonlari berilgan (a < b).
// a va b sonlari orasidagi barcha butun sonlarni(a va b ni ham)
//chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin.
//(a va b xam chiqarilsin).

// let a = 1;
// let b = 9;

// for (let i = a; i <= b; i++) {
//   console.log(i);
// }

//============================
// For2. a va b butun sonlari berilgan (a < b).
//a va b sonlari orasidagi barcha butun sonlarni(a va b dan tashqari)
//kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi
//progma tuzilsin.

// let a = 1;
// let b = 9;

// for (let i = a + 1; i < b; i++) {
//   console.log(i);
// }

// For3. Bir kg konfetning narxi berilgan (haqiqiy son).
// 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let price = 10000;

// let result = 0;

// for (let i = 1; i <= 10; i++) {
//   result = i * price;
//   console.log(result);
// }

//===============================

// For4. Bir kg konfetning narxi berilgan (haqiqiy son).
//1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let price = 10000;

// let result = 0;

// for (let i = 1; i <= 10; i += 0.2) {
//   console.log(i);

//   result = i * price;
//   console.log(result);
// }

//============================================
// For5. a va b butun sonlari berilgan (a < b).
// a dan b gacha bo'lgan barcha butun sonlar yig'indisini
// chiqaruvchi programma tuzilsin.

// let a = 1;
// let b = 10;
// let result = 0;
// for (let i = a; i <= b; i++) {
//   result += i;
//   console.log(result);
// }

//====================================

// For6. a va b butun sonlari berilgan (a < b).
//a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini
//chiqaruvchi programma tuzilsin.

// let a = 1;
// let b = 10;

// let result = 1;
// for (let i = a; i <= b; i++) {
//   result *= i;
//   console.log(result);
// }

//==========================================

// For7. a va b butun sonlari berilgan (a < b).
//  a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini
//  chiqaruvchi programma tuzilsin.
// let a = 1;
// let b = 10;

// let result = 0;
// for (let i = a; i <= b; i++) {
//   result += i ** 2;
//   console.log(result);
// }

//==============================
// For8. n butun soni berilgan (n > 0).
//Quyidagi yig'indini hisoblovchi programma tuzilsin.
//S = 1 + 1 / 2 + 1 / 3 +...+1 / n
// let n = 6;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += 1 / i;
// }

// console.log(sum);

// For9. n butun soni berilgan (n > 0).
//Quyidagi ko'paytmani hisoblovchi programma tuzilsin.
//S = 1.1 * 1.2 * 1.3 *... * n

// let n = 5;
// let sum = 1;

// for (let i = 1; i <= n; i++) {
//   sum *= i + i / 10;
// }

// console.log(sum);

//===============================

// For11. n butun soni va a haqiqiy soni berilgan (n > 0).
//a ning n - darajasini aniqlovchi programma tuzilsin.
// a^n=a*a*a...a;

// let n = 5;
// let a = 2;

// let sum = 1;

// for (let i = 1; i <= n; i++) {
//   sum *= a;
// }

// console.log(sum, a ** n);

//================================

// For12. n butun soni va a haqiqiy soni berilgan (n > 0).
//Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan barcha
//darajalarini chiqaruvchi programma tuzilsin.

// let n = 5;
// let a = 2;

// for (let i = 1; i <= n; i++) {
//   console.log(a ** i);
// }

//====================================

// For13. n butun soni va a haqiqiy soni berilgan (n > 0).
//Bir sikldan foydalanib quyidagi a ning 1 dan n gacha bo'lgan
//barcha darajalarini chiqaruvchi va yig'indini hisoblovchi programma tuzilsin.
// S = 1+a^1+a^2 + a^3 + ... a^n

// let n = 5;
// let a = 2;

// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   console.log(a ** i);

//   sum += a ** i;
// }

// console.log(sum);

//===============================

// For14. n butun soni berilgan (n > 0).
//Bir sikldan foydalangan holda quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = 1! + 2! + 3! + ... + n!

// const n = 5;
// let sum = 0;
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//   factorial *= i;
//   console.log(factorial);

//   sum += factorial;
// }

// console.log(sum);

// For15. N va K butun sonlari berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^K + 2^K + ... + N^K

// let n = 5;
// let k = 8;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += k ** i;
// }

// console.log(sum);

//=======================================

// For16. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^1 + 2^2 + … + N^N

// let n = 2;

// let s = 0;

// for (let i = 1; i <= n; i++) {
//   s += i ** i;
// }

// console.log(s);

//===================================

// For17. A va B butun soni berilgan (A < B).
//A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin.
//Bunda A soni 1 marta, (A + 1) soni 2 marta chiqariladi va xokazo.

// const a = 3;
// const b = 6;

// for (let i = a; i <= b; i++) {
//   for (let j = 1; j <= i - a + 1; j++) {
//     console.log(i);
//   }
// }

//========================================

// For18. Sonning barcha bo’luvchilarini,
//ularning sonini va yig’indisini chiqaruvchi dastur tuzing.

// For19. n butun soni berilgan (n > 1).
//N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.

// let n = 4;
// let counter = 0;

// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) counter++;
// }

// if (counter == 2) {
//   console.log(true);
// } else console.log(false);

//========================================

// For20. Sonlarni quyidagi tartibda chiqaruvchi dastur tuzing. N = 5 bo’lganda,
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     console.log(j);
//   }
// }

// karra jadvalini chiqarish

// for (let i = 2; i <= 9; i++) {
//   console.log(`${i}-karra jadvali`);

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i}*${j}=${i * j}`);
//   }
// }

// While1. A va B butun musbat sonlari berilgan (A> B).
// A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan
//.A kesmaning bo'sh qismini aniqlovchi programma tuzilsin.
//Ko'paytirish va bo'lish amallarini ishlatmang.
// let a = 17;
// let b = 5;
// let boshQism = a;
// while (boshQism >= b) {
//   boshQism -= b;
// }

// console.log(boshQism);

// While2. A va B butun musbat sonlari berilgan (A > B).
// A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini
//aniqlovchi programma tuzilsin.Ko'paytirish va bo'lish amallarini ishlatmang.

// let a = 17;
// let b = 5;
// let boshQism = a;
// let counter = 0;
// while (boshQism >= b) {
//   boshQism -= b;
//   counter++;
// }

// console.log(counter);

//==========================================

// While3. n butun soni berilgan (n > 0).
// Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi",
//aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma tuzilsin.
// Qoldiqli bo'lish va bo'lish amallarini ishlatmang.

// let n = 18;

// if (n <= 0) {
//   console.log("3ning darajasi emas");
// } else {
//   let num = 1;

//   while (num < n) {
//     num *= 3;
//   }

//   if (num === n) {
//     console.log("3ning darajasi");
//   } else console.log("3ning darajasi emas");
// }

//=================================

// While4. n va m butun musbat sonlari berilgan (n > m).
//n sonini m soniga bo'lib butun va qoldiq qismlarini bo'lish va
//qoldiqni olish amallarini ishlatmasdan topuvchi programma tuzilsin.

// let n = 14;
// let m = 3;
// let s = 0;

// while (n > m) {
//   n = n - m;
// }

// console.log(n);

//============================

// While10. n butun soni berilgan (n > 1).
// N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.

// let n = 7;

// let counter = 0;
// let i = 1;
// while (i <= n) {
//   if (n % i == 0) counter++;
//   i++;
// }

// if (counter == 2) {
//   console.log(true);
// } else console.log(false);

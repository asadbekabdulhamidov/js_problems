// If-Else va String Metodlariga Oid Masalalar:
// 1) Foydalanuvchidan ism so‘rab, agar ism admin bo‘lsa,
//"Xush kelibsiz, administrator!" aks holda "Xush kelibsiz,
//foydalanuvchi!" deb chiqaruvchi dastur yozing.

// let ism = "admin";

// ism == "admin"
//   ? console.log("xush kelibsz admin")
//   : console.log("xush kelibsz foydalanuvchi");

//================================================

// 2) Foydalanuvchidan parol so‘rab, parol uzunligi kamida 8 ta
//belgidan iborat bo‘lsa va raqam ham aralashsagina
//"Parol qabul qilindi", aks holda "Parol juda sodda" deb chiqaring.

// let parol = "12asadbek";
// let regex = /[0-9]/;

// if (parol.length >= 8 && regex.test(parol)) {
//   console.log("parol qabul qilindi");
// } else console.log("parol juda sodda");

//============================================

// 3) Foydalanuvchi email manzilini kiritsa,
//agar @va.belgilar mavjud bo‘lsa "Email to‘g‘ri",
//aks holda "Email noto‘g‘ri" deb chiqaring.

// let email = "aabdulhamidov818@gmail.com";

// if (email.includes("@") && email.includes(".")) console.log("email togri");
// else console.log("email notogri");

//==========================================

// 4) Foydalanuvchidan matn va so‘z so‘rab,
// agar matn ichida so‘z mavjud bo‘lsa "Topildi", aks holda
//"Topilmadi" deb chiqaruvchi dastur tuzing.

//==============================================

// 5) Foydalanuvchidan soatni so‘rab, agar soat 6-12
//oralig‘ida bo‘lsa "Xayrli tong", 12 - 18 oralig‘ida
//"Xayrli kun", 18 - 24 oralig‘ida "Xayrli kech" deb chiqaring,
//aks holda "Noto‘g‘ri soat" deb xabar bering.

// let soat = 5;

// if (soat >= 6 && soat <= 12) console.log("xayrli tong");
// else if (soat > 12 && soat <= 18) console.log("hayrli kun");
// else if (soat > 18 && soat <= 24) console.log("xayrli kech");
// else console.log("notogri vaqt");

//=========================================

// 6) Foydalanuvchidan matn so‘rab, agar matn uzunligi
// kamida 3 belgidan iborat bo‘lsa, uchinchi harfni chiqaring,
//aks holda "Matn juda qisqa" deb xabar bering.

// let str = "asadbek";

// str.length >= 3 ? console.log(str[3]) : console.log("matn juda qisqa");

//==========================================

// 7) Foydalanuvchidan raqamli matn so‘rab,
//agar matn faqat raqamlardan iborat bo‘lsa,
//raqamlarni teskari tartibda chiqarish, aks holda
//"Noto‘g‘ri kirish" deb xabar bering.

// let str = "123456";

// if (!isNaN(str)) {
//   let result = str.split().reverse().join();
//   console.log(result);
// } else console.log("notogri kirish");

//==============================================

// 8) Foydalanuvchidan tug‘ilgan yilini so‘rab,
//agar yil 2000 yildan katta yoki teng bo‘lsa
//"Yosh foydalanuvchi", aks holda "Kattaroq foydalanuvchi"
// deb chiqarish.

// let year = 1999;

// year >= 2000
//   ? console.log("yosh foydalanuvchi")
//   : console.log("kattaroq foydalanuvchi");

//================================================

// 9) Foydalanuvchidan matn so‘rab, agar matnda faqat kichik
// harflar bo‘lsa, uni katta harflarga o‘zgartiring,
//aks holda kichik harflarga o‘zgartiring.

// let str = "asadbek";

// str == str.toLowerCase()
//   ? console.log(str.toUpperCase())
//   : console.log(str.toLowerCase());

//=======================================================
// 10) Foydalanuvchidan telefon raqamini so‘rab,
//agar raqam uzunligi 10 ta bo‘lsa va faqat raqamlardan
//iborat bo‘lsa "Telefon raqami to‘g‘ri", aks holda
//"Telefon raqami noto‘g‘ri" deb chiqaring.

// let tel = "1234567890";
// let num = Number(tel);

// if (tel.length == 10 && num) console.log("telefon raqami togri");
// else console.log("telefon raqami notogri");

//==========================

// 11)  Foydalanuvchidan so‘z yoki ibora so‘rab,
//agar u palindrom bo‘lsa "Palindrom", aks holda
//"Palindrom emas" deb xabar bering.

// let str = "level";
// let polindrom = str.split().reverse().join();

// if (polindrom == str) console.log(true);
// else console.log(false);

//===========================================

// 12)  Foydalanuvchidan matn so‘rab,
// agar birinchi va oxirgi harflar bir xil bo‘lsa
//"Bir xil harf", aks holda "Harflar farq qiladi" deb chiqaring.

// let str = "spotrs";
// if (str[str.length - 1] == str[0]) console.log("bir hil harf");
// else console.log("harflar farq qiladi");

//====================================

// 13) Foydalanuvchidan URL so‘rab,
//agar http:// yoki https:// bilan boshlansa "URL to‘g‘ri",
// aks holda "URL noto‘g‘ri" deb xabar bering.

// let url = "https://kun.uz";

// if (url.includes("http://") || url.includes("https://")) console.log(true);
// else console.log(false);

//=============================================

// 14) Foydalanuvchidan matn so‘rab, agar matn faqat
//harflardan iborat bo‘lsa, harflarni alohida chiqarish,
//aks holda "Noto‘g‘ri matn" deb chiqaring.

// let str = "asadbek abdulhamidov";

// if (Number(str) !== NaN) {
//   for (let i = 0; i <= str.length; i++) {
//     console.log(str[i]);
//   }
// } else console.log("notogri matn");

//===================================================

// 15) Foydalanuvchidan so‘z so‘rab, agar so‘z uzunligi
//5 ta belgidan oshsa "Katta so‘z", aks holda "Kichik so‘z"
// deb chiqarish.

// let str = "frontend";

// str.length > 5 ? console.log("katta soz") : console.log("kichik soz");

//==================================
// 16) Foydalanuvchidan matn so‘rab,
//agar matnda katta harf bo‘lsa, birinchi katta harfni chiqarish,
//aks holda "Katta harf yo‘q" deb xabar bering.

// let str = "asaDbek";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toUpperCase()) {
//     console.log(str[i]);
//   }
// }

//=====================================

// 17) Foydalanuvchidan FIO (Familiya, Ism, Otasining ismi)
//so‘rab, agar har bir qism bosh harf bilan boshlansa
//"To‘g‘ri FIO", aks holda "Noto‘g‘ri FIO" deb chiqaring.

//===============================================

// 18) Foydalanuvchidan matn so‘rab,
//agar matn kamida ikki so‘zdan iborat bo‘lsa, so‘zlarni
//teskari tartibda chiqarish, aks holda "Kam so‘zli matn"
//deb xabar bering.

// let str = "salom dunyo ";

// let arr = str.split(" ");

// if (arr.length >= 2) console.log(arr.reverse().join());
// else console.log("kam sozli matn");

// 19) Foydalanuvchidan URL so‘rab, agar
//URL parametrlarga ega bo‘lsa, parametrlarni ajratib chiqarish,
//aks holda "Parametrlar yo‘q" deb chiqaring.

// let url = 'https"//kun.uz';

// if (url.includes("?")) console.log(true);
// else console.log(false);

//============================================

// 20) Foydalanuvchidan matn so‘rab, agar matnda harflar va
// raqamlar aralash bo‘lsa, "Miksa to‘g‘ri", aks holda
//"Miksa noto‘g‘ri" deb xabar bering.

// let str = "asadbek1";

// if (/[0-9]/.test(str)) console.log("miksa togri");
// else console.log("miksa notogri");

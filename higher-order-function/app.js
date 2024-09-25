// 1.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi
//getNamesByGrade(students, grade) funksiya tuzing. (map, filter)

// 5 baho - (85 - 100)
// 4 baho - (70 - 85)
// 3 baho – (60 - 70)

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// const studendWithGrade = students.map((student) => {
//   const present = student.percent;
//   if (present >= 85 && present <= 100) return { ...student, grade: 5 };
//   else if (present >= 70 && present < 85) return { ...student, grade: 4 };
//   else if (present >= 60 && present < 70) return { ...student, grade: 3 };
//   else return { ...student, grade: "fail" };
// });

// console.log(studendWithGrade);

// Output

// const students = [
//   { name: "Quincy", percent: 96, grade: 5 },
//   { name: "Jason", percent: 84, grade: 4 },
//   { name: "Alexis", percent: 100, grade: 5 },
//   { name: "Sam", percent: 65, grade: 3 },
//   { name: "Katie", percent: 90, grade: 5 },
//   { name: "Anna", percent: 75, grade: 4 },
// ];

// Input: getNamesByGrade(students, 5)
// Output: ['Quincy', 'Alexis', 'Katie']

// 2.  Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce)

// Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// Output: {
//     dog: 2,
//     chicken: 3,
//     cat: 1,
//     rabbit: 1
//  }

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];

// let animalObj = animals.reduce((acc, animal) => {
//   if (acc[animal]) {
//     acc[animal]++;
//   } else {
//     acc[animal] = 1;
//   }
//   return acc;
// }, {});

// console.log(animalObj);

//==================================================

// 3.  Massiv elementlari kvadratlaridan hosil bo’lgan massiv
// hosil qiling. (map)

// let arr = [1, 2, 3, 4, 5];

// let kvArr = arr.map((item) => item ** 2);
// console.log(kvArr);

// Output: [1, 4, 9, 16, 25]

//================================================

// 4.  Massivdagi musbat sonlar yig’indisini hisoblang. (filter va reduce)

// let arr = [1, -4, 12, 0, -3, 29, -150];
// let count = arr.filter((item) => item > 0).reduce((acc, item) => acc + item);
// console.log(count);

// Output: 42

//==========================================================

// 5.  Satrdagi so’zlarning bosh harflarini oling. (split, map, join)

// let matn = "George Raymond Richard Martin";
// let arr = matn
//   .split(" ")
//   .map((item) => item[0])
//   .join("");

// console.log(arr);

// Output: 'GRRM'

//==========================================

// 6.  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).

// let users = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// let sortedUsers = users.sort((a, b) => a.age - b.age);
// let count = sortedUsers[sortedUsers.length - 1].age - sortedUsers[0].age;
// console.log(count);

// Output: 54

//==============================================

// 7.  N ta elementdan iborat massiv berilgan.
// Massiv elementlari orasidan juftlarini va toqlarini
//o'z ichiga oladigan massivlar hosil qilinsin. (filter)

// const numbers = [1, 5, 2, 4, 7, 8, 9];

// let oddNumbers = numbers.filter((num) => num % 2 == 0);
// let evenNumber = numbers.filter((num) => num % 2 == 1);
// console.log(oddNumbers, evenNumber);

//===============================================

// 8.  N ta elementdan iborat massiv berilgan.
//Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini
//o’chiruvchi dastur tuzilsin.Faqat birinchi uchragani qoldirilsin. (reduce)

// let arr = [1, 2, 3, 4, 2, 5, 6, 4, 7, 8, 1];

// const uniqueArr = arr.reduce((acc, index) => {
//   if (!acc.includes(index)) {
//     acc.push(index);
//   }
//   return acc;
// }, []);
// console.log(uniqueArr);

// 9. Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// 10. Rating bo'yicha eng kuchli product topilsin. (sort)

// let ratingArr = products.sort((a, b) => {
//   return a.rating - b.rating;
// });
// let engKuchli = ratingArr[ratingArr.length - 1];
// console.log(engKuchli.name, engKuchli.rating);

//=======================================

// 11. Narxi eng past bo'lgan product topilsin. (sort)

// let priced = products.sort((a, b) => {
//   return a.price - b.price;
// });

// console.log(priced[0].price);

//===================================

// 12. Barcha products narxlari yig'indisi topilsin.
//(reduce)

// let yigindi = products.reduce((acc, index) => {
//   return (acc += index.price);
// }, 0);

// console.log(yigindi);

//=========================================

// 13. Faqatgina products nomlaridangina iborat bo'lgan
//massiv qaytaring. (map)

// let arr = products.map((product, index) => {
//   return product.name;
// });

// console.log(arr);

//============================================

// 14. Id si 5 bo'lgan elementni nomini qaytaruvchi
//dastur yozing. (find)

// let arr = products.find((product) => product.id == 5);
// console.log(arr.name);

//=======================================

// 15. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)

// let arr = products.filter((product) => product.id != 4);
// console.log(arr);

// 16. Berilgan satrni faqatgina harflardan iborat ekanligiga tekshiring (split, every)

// let str = "Berilgan satrni faqatgina";

// let arr = str.split(" ").every((item, index) => /[a-zA-z]/.test(item));
// console.log(arr);

//===========================================

// 17. Massiv truthy va falsy elementlardan tuzilgan.
//O’sha massivdagi truthy va falsy elementlarni alohida
//massivlarga ajratib object qilib qaytaruvchi
//getTruthyFalsy funksiya tuzing. (filter)
// let arr = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];

// function getTruthyFalsy(arr) {
//   let truthy = arr.filter((item) => Boolean(item));
//   let falsy = arr.filter((item) => !Boolean(item));

//   return { truthy, falsy };
// }

// let result = getTruthyFalsy(arr);
// console.log(result);

// Output: {truthy: [1, 10, "abdulaziz", 1.13], falsy: [false, "", null, 0]}
//=============================================

// 18. Satr berilgan.
// Satrdagi so'zlar uzunligidan iborat bo'lgan massiv qaytaring. (split, map)

// let str = "Men Abdulaziz Programmerman";

// let arr = str.split(" ").map((item) => item.length);
// console.log(arr);

// Outpu: [3, 9, 13]

//=============================================

// 19. Satrni bo'sh joy bor yoki yo'qligini tekshiring. (split, some)
// let str = "Men Abdulaziz Programmerman";

// let arr = str.split("").some((item) => {
//   return item == " ";
// });
// console.log(arr);

//===================================

// 20. Objectning kalit va qiymatlarining string
// ko'rinishidagi yig'indisidan iborat massiv qaytaring.
//(Object.entries, map, join)

// let obj = { a: 2, b: 5, c: 7 };
// let arr = Object.entries(obj).map(([key, value]) => `${key}:${value}`);
// console.log(arr);

// Output: ['a2', 'b5', 'c7']

//=====================================

// 22. Quyidagi pupils massividagi barcha o'quvchilarni
// protcentlarining o'rtacha qiymatini toping. (red
// let ortacha = pupils.reduce((acc, index) => {
//   return Math.floor((acc += index.protcent) / pupils.length);
// }, 0);
// console.log(ortacha);

// Pupils massividagi ojectlarga quyidagi
//propertylarni qo'shib yangi massiv qaytaring. (map)

// 23. grade propertyga protcent 90-100 o'rtasida bo'lsa
//5, 80 - 90 o'rtasida bo'lsa 4, 70 - 80 o'rtasida bo'lsa
//3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.(map)
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let arr = pupils.map((item) => {
//   if (item.protcent >= 90 && item.protcent <= 100) item.grade = 5;
//   else if (item.protcent >= 80 && item.protcent < 90) item.grade = 4;
//   else if (item.protcent >= 70 && item.protcent < 80) item.grade = 3;
//   else item.grade = 2;

//   return item;
// });

// console.log(arr);

//=================================

// 24. isPassed propertyga protcent 70 dan o'tsa
//true, aks holda false qiymat o'zlashtirilsin. (map)

// let arr = pupils.map((item) => {
//   if (item.protcent > 70) item.ispassed = true;
//   else item.isPassed = false;
//   return item;
// });
// console.log(arr);

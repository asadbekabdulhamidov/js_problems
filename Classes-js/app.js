//boshqa odamlarni ham qoshish
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// const person1 = new Person("Ali", 25);
// const person2 = new Person("Asadbek", 24);
// const person3 = new Person("Doston", 25);
// console.log(person1.greet());
// console.log(person2.greet());
// console.log(person3.greet());

//==============================
// Vazifa: O'zingiz boshqa arifmetik amallar qo'shing, masalan
//, kvadrat ildiz yoki darajaga ko'tarish.
// class Calculator {
//   add(a, b) {
//     return a + b;
//   }

//   subtract(a, b) {
//     return a - b;
//   }

//   multiply(a, b) {
//     return a * b;
//   }

//   divide(a, b) {
//     if (b !== 0) return a / b;
//     else return "Division by zero is not allowed";
//   }

//   kv(a, b) {
//     return a ** b;
//   }
// }

// const calc = new Calculator();
// console.log(calc.add(10, 5)); // 15
// console.log(calc.divide(10, 0)); // Division by zero is not allowed
// console.log(calc.kv(2, 3)); // Division by zero is not allowed

//====================================

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   sound() {
//     return `${this.name} makes a sound.`;
//   }
// }

// class Dog extends Animal {
//   //   sound() {
//   //     return `${this.name} barks.`;
//   //   }
// }

// class Bird extends Animal {}

// const dog = new Dog("Rex");
// const bird = new Bird("chip");
// console.log(dog.sound()); // Rex barks.
// console.log(bird.sound()); // Rex barks.

//==================================

// class Webbrain {
//   static age = 0;
//   getAge() {
//     console.log(++Webbrain.age);
//   }
// }

// let std1 = new Webbrain();
// let std2 = new Webbrain();

// std1.getAge();
// std1.getAge();
// std2.getAge();

//=================================
// Class va Constructor: Biror Person klassini yarating,
//unda ism va yosh xususiyatlari bo'lsin. Yangi odam
//yaratganingizda, uning ismi va yoshi avtomatik saqlansin.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getName() {
//     return this.name;
//   }
//   getAge() {
//     return this.age;
//   }
// }

// let pr1 = new Person("Ali", 10);
// let pr2 = new Person("Asadbek", 30);
// console.log(pr1.getAge());
// console.log(pr1.getName());
// console.log(pr2.getAge());
// console.log(pr2.getName());

//===================================

// // Method qo'shish: Person klassiga greet() metodi qo'shing,
//  bu metod "Salom, mening ismim [ismi]" deb qaytarsin.
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getName() {
//     return this.name;
//   }
//   getAge() {
//     return this.age;
//   }
//   greet() {
//     return `salom,mening ismim ${this.name}`;
//   }
// }

// let pr1 = new Person("Ali", 10);
// console.log(pr1.greet());

//===============================

// Inheritance: Employee klassini Person dan meros qilib oling
//, va unga qo'shimcha maosh xususiyatini qo'shing.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getName() {
//     return this.name;
//   }
//   getAge() {
//     return this.age;
//   }
//   greet() {
//     return `salom,mening ismim ${this.name}`;
//   }
// }

// let pr1 = new Person("Ali", 10);

// class Employe extends Person {
//   constructor(name, age, greet, price) {
//     super(name, age);
//     this.price = price;
//   }
//   info() {
//     return `name:${this.name},age:${this.age},price:${this.price}`;
//   }
// }

// let emp = new Employe("Ali", 10, 3000);

// console.log(emp.info());
// console.log(emp.greet());

// Method Overriding: Employee klassida greet()
//metodini o'zgartiring, shunda u "Salom, men [ismi]man
// va men[maosh] olaman" deb qaytarsin.

// class Employe extends Person {
//   constructor(name, age, price) {
//     super(name, age);
//     this.price = price;
//   }
//   info() {
//     return `name:${this.name},age:${this.age},price:${this.price}`;
//   }
//   greet() {
//     return `Salom men ${this.name}man va men ${this.price} maosh olaman`;
//   }
// }

// let emp = new Employe("Ali", 10, 3000);
// console.log(emp.greet());

// Static Method: MathUtil degan class yarating va
// unda ikkita sonni ko'paytiradigan static metod qo'shing.

// class MathUtil {
//   kopaytma(a, b) {
//     return a * b;
//   }
// }

// let num = new MathUtil();
// console.log(num.kopaytma(10, 2));

// Private xususiyatlar: BankAccount klassini yarating,
//unda balans xususiyati bo'lsin. Lekin bu xususiyatni
//tashqaridan ko'rinmas qilib, faqat metod orqali kirish imkonini bering.

// class BankAccount {
//   #balans = "$10000";

//   getBalans() {
//     return this.#balans;
//   }
// }

// let bank = new BankAccount();
// console.log(bank.getBalans());

//===================================

// Getter va Setter: Rectangle klassini yarating,
//kenglik va bo'ylik xususiyatlari bo'lsin.Perimetr va
//yuzani hisoblash uchun getter metodlari qo'shing.

// class Rectangle {
//   constructor(kenglik, boylik) {
//     this.kenglik = kenglik;
//     this.boylik = boylik;
//   }

//   get kenglik() {
//     return this.kenglik;
//   }

//   set kenglik(vl) {
//     return (this.kenglik = vl);
//   }

//   get boylik() {
//     return this.boylik;
//   }
//   set boylik(vl) {
//     return (this.boylik = vl);
//   }

//   //perimetr hisoblash
//   get perimetr() {
//     return 2 * (this.kenglik + this.boylik);
//   }
//   get yuza() {
//     return this.kenglik * this.boylik;
//   }
// }

// let rect = new Rectangle(10, 20);
// console.log(rect.perimetr);
// console.log(rect.yuza);

//===================================

// Constructor chaining: Biror asosiy Shape klassini yarating
//va undan Circle va Square klasslarini meros qilib oling.
//Har birida tegishli xususiyatlar bo'lsin.

// Instanceof: Biror Animal klassi yarating, keyin Dog va Cat klasslarini meros qilib oling. Ushbu klasslar yordamida biror object qaysi klassdan ekanligini tekshirish uchun instanceof operatoridan foydalaning.

// Abstract Class: Biror Vehicle abstract klassini yarating va unda move() metodi bo'lsin. Keyin Car va Bicycle klasslarini ushbu abstract klassdan meros qilib oling va move() metodini o'zlariga xos tarzda amalga oshiring.

// const formatDate = (date, format) => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const weekDays = [
//     "Sunday", // 0
//     "Monday", // 1
//     "Tuesday", // 2
//     "Wednesday", // 3
//     "Thursday", // 4
//     "Friday", // 5
//     "Saturday", // 6
//   ];

//   let year = date.getFullYear();
//   let month = date.getMonth();
//   let day = date.getDate();
//   let weekday = date.getDay();
//   let hour = date.getHours();
//   let minut = date.getMinutes();
//   let second = date.getSeconds();
//   let pm = "PM";
//   let am = "AM";

//   switch (format) {
//     case "LT":
//       return `${hour}:${minut} ${hour < 12 ? pm : am}`; // 1:24 PM
//     case "LTS":
//       return `${hour}:${minut}:${second < 10 ? "0" + second : second} ${
//         hour < 12 ? pm : am
//       }`; // 1:25:04 PM
//     case "L":
//       return `${month < 10 ? "0" + month : month}/${
//         day < 10 ? "0" + day : day
//       }/${year}`; // 09/30/2024
//     case "l":
//       return `${month}/${day}/${year}`; // 9/30/2024
//     case "LL":
//       return `${months[month]} ${day}, ${year}`; // September 30, 2024
//     case "ll":
//       return `${months[month].slice(0, 3)} ${day}, ${year}`; // Sep 30, 2024

//     case "LLL":
//       return `${months[month]} ${day}, ${year} ${hour}:${minut} ${
//         hour < 12 ? pm : am
//       } `; // September 30, 2024 1:34 PM
//     case "lll":
//       return `${months[month].slice(0, 3)} ${day}, ${year} ${hour}:${minut} ${
//         hour < 12 ? pm : am
//       } `; // Sep 30, 2024 1:37 PM
//     case "LLLL":
//       return `${weekDays[weekday]}, ${
//         months[month]
//       } ${day}, ${year} ${hour}:${minut} ${hour < 12 ? pm : am}`; // Monday, September 30, 2024 1:38 PM
//     case "llll":
//       return `${weekDays[weekday].slice(0, 3)}, ${months[month].slice(
//         0,
//         3
//       )} ${day}, ${year} ${hour}:${minut} ${hour < 12 ? pm : am}`; // Mon, Sep 30, 2024 1:44 PM
//     default:
//       return date.toString();
//   }
// };
// let date = new Date();

// console.log(formatDate(date, "LT"));

//==========================================

// class formatterDate {
//   constructor(date) {
//     this.date = date;
//     this.month = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];
//     this.weekDays = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];
//   }

//   format(value) {
//     const year = this.date.getFullYear();
//     const month = this.date.getMonth();
//     const day = this.date.getDay();
//     const weekDay = this.date.getDay();
//     const hour = this.date.getHours();
//     const minut = this.date.getMinutes();
//     const second = this.date.getSeconds();
//     const pm = "PM";
//     const am = "AM";

//     //case

//     switch (value) {
//       case "LT":
//         return `${hour}:${minut} ${hour < 12 ? pm : am}`; // 1:24 PM
//       case "LTS":
//         return `${hour}:${minut}:${second < 10 ? "0" + second : second} ${
//           hour < 12 ? pm : am
//         }`; // 1:25:04 PM
//       case "L":
//         return `${month < 10 ? "0" + month : month}/${
//           day < 10 ? "0" + day : day
//         }/${year}`; // 09/30/2024
//       case "l":
//         return `${month}/${day}/${year}`; // 9/30/2024
//       case "LL":
//         return `${months[month]} ${day}, ${year}`; // September 30, 2024
//       case "ll":
//         return `${months[month].slice(0, 3)} ${day}, ${year}`; // Sep 30, 2024

//       case "LLL":
//         return `${months[month]} ${day}, ${year} ${hour}:${minut} ${
//           hour < 12 ? pm : am
//         } `; // September 30, 2024 1:34 PM
//       case "lll":
//         return `${months[month].slice(0, 3)} ${day}, ${year} ${hour}:${minut} ${
//           hour < 12 ? pm : am
//         } `; // Sep 30, 2024 1:37 PM
//       case "LLLL":
//         return `${weekDays[weekday]}, ${
//           months[month]
//         } ${day}, ${year} ${hour}:${minut} ${hour < 12 ? pm : am}`; // Monday, September 30, 2024 1:38 PM
//       case "llll":
//         return `${weekDays[weekday].slice(0, 3)}, ${months[month].slice(
//           0,
//           3
//         )} ${day}, ${year} ${hour}:${minut} ${hour < 12 ? pm : am}`; // Mon, Sep 30, 2024 1:44 PM
//       default:
//         return date.toString();
//     }
//   }
// }

// let date = new Date();

// let moment = new formatterDate(date);

// console.log(moment.format("LLLL"));

class DateFormatter {
  constructor(date) {
    this.date = date;
    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  }

  format(formatString) {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();
    const day = this.date.getDate();
    const weekday = this.date.getDay();
    const hour = this.date.getHours();
    const minut = this.date.getMinutes();
    const second = this.date.getSeconds();
    const pm = "PM";
    const am = "AM";

    switch (formatString) {
      case "LT":
        return `${hour}:${minut} ${hour < 12 ? am : pm}`;
      case "LTS":
        return `${hour}:${minut}:${second < 10 ? "0" + second : second} ${
          hour < 12 ? am : pm
        }`;
      case "L":
        return `${month < 9 ? "0" + (month + 1) : month + 1}/${
          day < 10 ? "0" + day : day
        }/${year}`;
      case "l":
        return `${month + 1}/${day}/${year}`;
      case "LL":
        return `${this.months[month]} ${day}, ${year}`;
      case "ll":
        return `${this.months[month].slice(0, 3)} ${day}, ${year}`;
      case "LLL":
        return `${this.months[month]} ${day}, ${year} ${hour}:${minut} ${
          hour < 12 ? am : pm
        }`;
      case "lll":
        return `${this.months[month].slice(
          0,
          3
        )} ${day}, ${year} ${hour}:${minut} ${hour < 12 ? am : pm}`;
      case "LLLL":
        return `${this.weekDays[weekday]}, ${
          this.months[month]
        } ${day}, ${year} ${hour}:${minut} ${hour < 12 ? am : pm}`;
      case "llll":
        return `${this.weekDays[weekday].slice(0, 3)}, ${this.months[
          month
        ].slice(0, 3)} ${day}, ${year} ${hour}:${minut} ${hour < 12 ? am : pm}`;
      default:
        return this.date.toString();
    }
  }
}

let date = new Date();
let moment = new DateFormatter(date);

console.log(moment.format("llll"));

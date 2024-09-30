// const date = new Date();
// console.log(date.getFullYear()); // Yil
// console.log(date.getMonth()); // Oy (0-11)
// console.log(date.getDate()); // Kun (1-31)
// console.log(date.getHours()); // Soat (0-23)
// console.log(date.getMinutes()); // Daqiqalar (0-59)
// console.log(date.getSeconds()); // Sekundlar (0-59)

// const date = new Date();
// date.setFullYear(2025);
// date.setMonth(11); // Dekabr
// date.setDate(25); // 25-kun
// console.log(date);

// Joriy sanani va vaqtni ko‘rsatadigan kod yozing.

// const now = new Date();
// console.log(now);
//===============================

// 1990-yil 1-yanvar sanasini yarating va uni chop eting.

// const date = new Date(1990, 0, 1);
// console.log(date);
//=====================================

// O'z sanangizni yaratib, undan yil, oy, kun, soat, daqiqa va
// sekundlarni ajratib ko'rsatadigan kod yozing.

// let now = new Date();

// let year = now.getFullYear();
// let month = now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth();
// let day = now.getDay();
// let date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
// let hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
// let minut = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
// let second = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

// console.log(year, month, day, date, hour, minut, second);

// moment().format("LT"); // 12:49 PM

// const getHour = (LT) => {
//   let now = new Date();
//   let hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
//   let PM = hour > 12 ? "PM" : "AM";
//   let minut = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
//   return `${hour}${LT}${minut} ${PM}`;
// };
// let LT = ":";
// console.log(getHour(LT));

//=======================================

// moment().format("LTS"); // 12:49:24 PM
// const getHour = (LT) => {
//   let now = new Date();
//   let hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
//   let PM = hour > 12 ? "PM" : "AM";
//   let minut = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
//   let second =
//     now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
//   return `${hour}${LT}${minut}${LT}${second} ${PM}`;
// };
// let LT = ":";
// console.log(getHour(LT));

//========================================
// moment().format("L"); // 09/30/2024

// function getDate(L) {
//   let now = new Date();
//   let year = now.getFullYear();
//   let month =
//     now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
//   let date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
//   return `${month}${L}${date}${L}${year}`;
// }

// let L = "/";
// console.log(getDate(L));

//=====================================

// moment().format("l"); // 9/30/2024

// function getDate(L) {
//   let now = new Date();
//   let year = now.getFullYear();
//   let month = now.getMonth() + 1 < 10 ? now.getMonth() + 1 : now.getMonth() + 1;
//   let date = now.getDate() < 10 ? +now.getDate() : now.getDate();
//   return `${month}${l}${date}${l}${year}`;
// }

// let l = "/";
// console.log(getDate(l));

//=========================================
// moment().format("LL"); // September 30, 2024

// const monthNames = [
//   "January", // 0
//   "February", // 1
//   "March", // 2
//   "April", // 3
//   "May", // 4
//   "June", // 5
//   "July", // 6
//   "August", // 7
//   "September", // 8
//   "October", // 9
//   "November", // 10
//   "December", // 11
// ];

// function getNow(monthNames) {
//   let now = new Date();
//   let month = monthNames[now.getMonth()];
//   let year = now.getFullYear();
//   let date = now.getDate();
//   return ` ${month} ${date}, ${year}`;
// }

// console.log();

///LIBRARY MOMENT JS
// moment.locale(); // en
// moment().format("LT"); // 1:13 PM
// moment().format("LTS"); // 1:13:36 PM
// moment().format("L"); // 09/30/2024
// moment().format("l"); // 9/30/2024
// moment().format("LL"); // September 30, 2024
// moment().format("ll"); // Sep 30, 2024
// moment().format("LLL"); // September 30, 2024 1:13 PM
// moment().format("lll"); // Sep 30, 2024 1:13 PM
// moment().format("LLLL"); // Monday, September 30, 2024 1:13 PM
// moment().format("llll");

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

// console.log(formatDate(date, "LLLL"));

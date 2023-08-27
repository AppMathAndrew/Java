// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// let a = -3;

// if (a > 0) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let a = "testt";

// if (a == "test") {
//     console.log("true");
// } else {
//     console.log("false");
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let a = 13;

// a > 10 ? console.log(a - 5) : console.log(a + 5);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let num = prompt("give number from 1 to 12:");

// switch (num) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("february");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
// };

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let num = prompt("give 3-digit number:");

// let a = null;
// let b = null;
// let c = null;

// a = Math.floor(num / 100);
// b = num % 10;
// c = Math.floor((num / 10) % 10);

// sum = a + b + c

// alert(`Сума цифр числа ${num} = ${sum}`)
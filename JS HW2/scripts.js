// Задание 1-2.

// let name=prompt("Как тебя зовут?", "Иван");
// let age=prompt("Сколько тебе лет?", "18");
// let city=prompt("В каком городе ты живешь?", "Брест");
// let phone=prompt("Введи свой телефонный номер", "+37529-856-52-52");
// let email=prompt("Введи свою электронную почту", "tishko@gmail.com");
// let company=prompt("Как называется твоя компания", "ТехноТранс");

// document.write("Меня зовут " + name + ". Мне " + age + " лет. Я проживаю в городе " + city + " и работаю в компании " + company + ". Мои контактные данные:" + phone + ", " + email + ".");

// document.write( '</br>' );

// let date=2023-age;
// document.write(name +" родился в " + date +" году.");


//Задание 3.
//    let code=prompt("Ввведите шестизначное число", "123456");


//  if ( +code[0] + +code[1] + +code[2] == + code[3] + +code[4] + +code[5] ) {
//      console.log("Да.");
//  }
//  else{
//      console.log("Нет.");
//  }




// Задание 4.

//  let a=0;
// a>0 ? console.log('Верно')  : console.log(`Не верно.`);



// Задание 5.

//let a=10, b=2;
// console.log(sum=a+b);
// console.log(min=a-b);
// console.log(inc=a*b);
// console.log(div=a/b);

// if (sum>1) {
//     console.log(sum ** 2);   
// }

// Задание 6.
// if (a>2 && a<11 && 6<=b && b<14 ) {
//     console.log("Верно.");
// }
// else{
//     console.log("Неверно.");
// }

//Задание 7.

//let n=prompt("Введи число от 0 до 59", "");


// if (n>=0 && n<=15 ) {
//     alert("Первая четверть часа.");
// }
// else if (n>15 && n<=30 ) {
//    alert("Вторая четверть часа.");
// }
// else if (n>30 && n<=45) {
//     alert("Третья четверть часа.");
// }
// else if (n>45 && n<=59) {
//        alert("Четвертая четверть часа.");
// }
// else {
//     alert("Неверное число.");
// }



//Задание 8.

// let day=prompt("Введи число от 1 до 31", "");


// if (day>=1 && day<=10 ) {
//     alert("Первая декада месяца.");
// }
// else if (day>=11 && day<=20 ) {
//    alert("Вторая декада месяца.");
// }
// else if (day>=21 && day<=31) {
//     alert("Третья декада месяца.");
// }
// else {
//     alert("Неверное число.");
// }


//Задание 9.

// let day=prompt("Введи любое количество дней.", "");

// if (day>=365){
//     years = day/365;
// }
// else {
//     years = "меньше года."
// }


// if (day>=31){
//     months = day/31;
// }
// else {
//     months = "меньше месяца."
// }


// if (day>=7){
//     weeks = day/7;
// }
// else {
//     weeks = "меньше недели."
// }

// let hours = day*24;
// let minuts = day * 1440;
// let sec = day * 86400;


// alert("Количество лет: " + years + " Количество месяцев: " + months + " Количество недель: " + weeks + " Количество часов: " + hours +  " Количество минут: " + minuts + " Количество секунд: " + sec );



//Задание 10.


// let day =prompt("Введи количество дней от 1 до 365.", "");

// let month;

// if (day>=1 && day<=31 ) {
//         month = "Январь.";
//     }
//     else if (day>=32 && day<=59 ) {
//        month = "Февраль.";
//     }
//     else if (day>=60 && day<=90) {
//         month = "Март.";
//     }
//      else if (day>=91 && day<=120 ) {
//         month = "Апрель.";
//      }
//      else if (day>=121 && day<=151) {
//         month = "Май.";
//     }
//     else if (day>=152 && day<=181) {
//         month = "Июнь.";
//      }
//      else if (day>=182 && day<=212) {
//          month = "Июль.";
//      }
//      else if (day>=213 && day<=243 ) {
//         month = "Август.";
//      }
//      else if (day>=244 && day<=273) {
//          month = "Сентябрь.";
//      }
//      else if (day>=274 && day<=304 ) {
//         month = "Октябрь.";
//      }
//      else if (day>=305 && day<=335 ) {
//         month = "Ноябрь.";
//      }
//      else if (day>=336 && day<=365 ) {
//         month = "Декабрь.";
//      }

//     else {
//         month = ("Слишком большое число.");

//     }




// let partOfYear;
// switch (month) {
//     case "Январь." :
//     case "Февраль." :
//     case "Декабрь." :
//         partOfYear = "Зима.";
//         break;

//     case "Март.":
//     case "Апрель.":
//     case "Май.":
//         partOfYear = "Весна.";
//         break;

//     case "Июнь.":
//     case "Июль.":
//     case "Август.":
//         partOfYear = "Лето.";
//         break;

//     case "Сентябрь.":
//     case "Октябрь.":
//     case "Ноябрь.":
//         partOfYear = "Осень.";
//         break;

//     case "Слишком большое число.":
//         partOfYear = "Больше года.";
//         break;
// }

// alert("Месяц " + month + " Время года: " + partOfYear);



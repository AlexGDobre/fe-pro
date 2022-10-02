// 1 задание------------------------------------

// let firstValue = prompt("first");
// let secondValue = prompt('На что делим наши ${firstValue}?');
// if(firstValue<1 && secondValue<1){
//     alert("обнаружен серьезный нарушитель пытающийся разделить минусовое значение на ноль ВИУ ВИУ ВИУ");
//   }
// else if(firstValue <0 || secondValue<0){
//   alert("не ну давай без минуса!");
// }
// else if(firstValue ==0 || secondValue ==0){
//   alert("ты чё рофлишь? на ноль и сам поделить можешь!");
// }
// else{
//   divideResult = firstValue/secondValue;
//   console.log(divideResult);
// }


// 2 задание------------------------------------

let week = ["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"];
let counter = 0;
console.log(week);

// вариант с вилом

// while(counter<7){
//   let message = week[counter] +' lesson at 7pm';
//   console.log(week[counter]);
//   // if (counter = 1){
//   //   let whichWeek = week[counter];
//   //   alert("${whichWeek}Lesson at 7pm");
//   // }
//   if (counter == 1 || counter == 3){
//     alert(message);
//   }
//   counter++;
// }


// вариант с фором

// let week2 = week;
// for(let c = 0; c < 7; c++){
//   let message = week2[c]+ " lesson at 6pm";
//   console.log(week2[c]);
//   if(c == 2 || c == 5){
//     alert(message);
//   }
// }


// 3 задание------------------------------------

// let discount = 10;
// let smallDiscount = 3;
// let priceMouse = 100;
// let tovar = prompt("Сколько купить мышей?");
// // let tovarCount = parseInt(tovar);
// console.log(tovar);
// if (tovar == 1){
//   console.log("Купить "+tovar+ " мышь");
// }
// else if (tovar > 0){
//   console.log("Купить "+tovar+ " мыши");
// }
// else{
//   console.log("никаких мышей!");
// }

// let price  = tovar >= 5 ? priceMouse*tovar-discount*tovar : priceMouse*tovar-smallDiscount*tovar;
// console.log(price);

// старый способ

// if (tovar >= 5){
//   let price = priceMouse*tovar-discount*tovar;
// console.log(price);
// }
// else{
//   let price = priceMouse*tovar-smallDiscount*tovar;
// console.log(price);
// }


// 4 задание------------------------------------

// let A = 0;
// let B = 10;
// while(A<B){
//   A++
//   console.log(A);
// };

// ... чет не понял задачи -_-


// 5 задание------------------------------------

let login = prompt("Your login plz");
let password = prompt("Your password plz");
let userData =[login, password];

const login1 = "Alex22102001old";
const password1 = "22102001";
const login2 = "admin"
const password2 = "admin"

//Первый вариант(рабочий)
 let userBase =[login2, password2];  

//Второй вариант. не получается (
//  let userBase =[[login1,password1],[login2, password2]]; 

console.log(userBase);
console.log(userBase[0], userBase[1])

//Первый вариант
if (userData[0] == userBase[0] && userData[1] == userBase[1]){
  alert("Entrance success");
}

//Второй вариант
// if (userData == userBase[0] && userData == userBase[1]){
//   alert("Entrance success");
// }

else{
  alert("Your login and pass dont exist");
}

//Пришла в голову идея со свичом. как реализовать не придумал ( думаю по этой же причине и второй вариант не работает
// switch userData[0,1]{
//   case userBase[0]:
//   case userBase[1]: 
//     break;
//   default:
//     alert("Your login and pass dont exist");
// }
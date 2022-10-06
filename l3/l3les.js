const arrFirstLast = [1,2,3,4,5,6,7, "last value"];

console.log(arrFirstLast[0]);
let arrLenght = arrFirstLast.length;
console.log(arrLenght);
let lastArrValue = arrFirstLast.length-1;
console.log(arrFirstLast[lastArrValue]);
let selectFromArr = 4;
for(let i = 0; i<selectFromArr; i++){
    console.log(arrFirstLast[i]);
}

let joinRes = arrFirstLast.join("*");
console.log(joinRes);
console.log(arrFirstLast);

const firstArr = [1,2,3];
const secondArr = [4,5,6];
// let resultConcat = firstArr.concat(secondArr);
// let resultConcat = firstArr.concat(true, false, secondArr);
// let resultConcat = firstArr.concat(true, false,['a','b'], secondArr, 1, 3.3);
let resultConcat = secondArr.concat(firstArr);

console.log(resultConcat);

// toString
let arrToStr = resultConcat.toString();
console.log(arrToStr);
let a= ['Tom', "Eva", "Serg", "Tim"]
let b= ['T', 'E', 'S', 'T'];
console.log(b.toString());

let reverseArr = new Array('Last',1,2,3,4, 'First');
reverseArr.reverse();
console.log(reverseArr);
let toDoList=['Buy Milk', 'Play', 'Read']

let value = [];
value = undefined;

console.log(Array.isArray(value),'Is Array');
console.log(Array.isArray(reverseArr),'Is Array');

// slice

let sliceArr = [10,21,333, true, false, 'Last'];
let slicePart = sliceArr.slice(0,1)+ sliceArr.slice(2,3);
// let slicePart = sliceArr.slice(3);
let fromIndex = 1;
let IdexValue = 3; // розрахунок томущо з 0
let sliceRes = sliceArr.slice(fromIndex, IdexValue);

console.log(slicePart);
console.log(sliceRes);
console.log(sliceArr);

let animals = [
    'dog',
    'cow',
    'fish'
]
let numbers = [20,30,10,50,40];
console.log(animals.sort());
console.log(numbers.sort());

// splice 

let spliceRes = numbers.splice(0,4);
console.log(spliceRes, 'afterSplice');
console.log(numbers, 'afterSplice numbers');

let bestStudent = ['Tom','Max','Ann', 'Igor'];
// let prize = bestStudent.splice(0,3);
// let studentWithoutPrize = bestStudent;


// console.log(prize, 'Student with prize');
// console.log(studentWithoutPrize, 'Student without prize');

bestStudent.splice(1,0, "Toma","Eva");
let addStudent = bestStudent;
console.log(addStudent, 'All student add');

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'),months.splice(4,0, 'may');
console.log(months);

const usersName = [];
usersName.push('New user');
console.log(usersName);
usersName.push('New user last');
console.log(usersName);
// let oddNumber= [];
usersName.unshift('First user');
console.log(usersName);
usersName.unshift(111);
console.log(usersName);

// pop
usersName.pop();
console.log(usersName);
usersName.pop();
console.log(usersName);

// shift
usersName.shift();
console.log(usersName);

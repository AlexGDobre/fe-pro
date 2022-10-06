// function hello(arg){
//   console.log(`Function argument ${arg}`);
// }
// hello("jkg3j45j");


// const testFunc = function(a,b){
//   console.log(`Function argument ${a+b}`);
// }

// let firstValue = 2;
// let secondValue = 3;


// testFunc(firstValue,secondValue);

let userName =[];
function getUserName(){
  nameFromFunction = prompt('User Name');
  userName.push(nameFromFunction);
}
console.log(userName);
function readData(userNames){
  for(let i=0; i<userNames.length; i++){
      console.log(userNames[i]);
  }
}

getUserName();
// getUserName();
// getUserName();
readData(userName);
console.log(readData);
let fnValue = readData(userName);

function addValue(...args){
  // let res = a+b
  // console.log(arguments);
  // console.log(arguments.length);
  console.log(args);
  console.log(args.length);
  // return res;
}

// let sumRes = addValue(3,6,4,5,6,7,8,);
addValue(3,6,4,5,6,7,8,);

// console.log(sumRes);

let global = 10;
function calculate (a=2,b=4){
  let global = 10;

  // if(b === undefined){
  //     b=3;
  // }
  return a+b+global;
}
function divide(a,b){
  return (a+b)/global;
}
let menuStatus = false;
function showMenu(){
  if(!showMenu){
      showMenu = !showMenu;
  }
}
console.log(calculate());
console.log(divide(20,10));
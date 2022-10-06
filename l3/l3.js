// 1-2 заданиz---------------------------------------

const arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];

function numbers(a){
  let evenArray =[]
  let oddArray = []
  for(let c = 0; c < a.length; c++){
    if(a[c]%2 == 0){
      evenArray.push(a[c])
    }
    else{
      oddArray.push(a[c])
    }
  };
  oddArray.sort()
  console.log(evenArray)
  console.log(oddArray)
};

numbers(arrRandomNumbers)
console.log(arrRandomNumbers)


// 3 задание-----------------------------------------

function multiply(a){
  let newArray = []
  for(let c=0; c<a.length; c++){
    res = a[c]*2;
    newArray.push(res)
  }
  console.log(newArray)
}

multiply(arrRandomNumbers)


// 4 задание-----------------------------------------

// function calc(){
//   firsBalue = prompt('first')
//   firsBalue = parseInt(firsBalue)
//   secBalue = prompt('second')
//   secBalue = parseInt(secBalue)
//   operaBalue = prompt('cho sdelat?')
//   switch(operaBalue){
//     case '+':
//       res = firsBalue + secBalue
//       break;
//     case '-':
//       res = firsBalue - secBalue
//       break;
//     case '*':
//       res = firsBalue * secBalue
//       break;
//     case '/':
//       res = firsBalue / secBalue
//       break;
//   }
//   console.log(res)
// }

// calc()


// 5 задание-----------------------------------------

const boolArr = ['aaa', true, 'ccc', false, 'false']

function bool(array){
  let clearArray = []
  boolTrue = true
  boolFalse = false
  for(c=0;c<array.length;c++){
    if(array[c] === true){
      boolArr.splice(c, c)
    }
    if(array[c] === false){
      boolArr.splice(c, c)
    }
  }
  // console.log(clearArray)
  console.log(boolArr)
}
bool(boolArr)

// function boolean(evenNumbersArray) {
//   let arrayNew = [];
//   for(let i=0; i<evenNumbersArray.length; i++) {
//       if (evenNumbersArray[i] != true && evenNumbersArray[i] != false) {
//           arrayNew.push(evenNumbersArray[i]);
//       }
      
//   }
//   return console.log(arrayNew);
// }
// boolean(boolArr);


// 6 задание-----------------------------------------

const smile = [':)', '=)',':)', '=)',':)', '=)'];

function delSmile(arr){
  newSmile=[]
  for(c=0; c<arr.length; c++){
    if(arr[c] == "=)"){
      newSmile.push(arr[c] = ";)")
    }
    else{
      newSmile.push(arr[c])
    }
  }
  console.log(newSmile)
}

delSmile(smile)


// 7 задание-----------------------------------------

const anim =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
let firstAnim=[]
let lastAnim = []

const animals =function(ani){
  directAnim = prompt('')
  if(directAnim == "first"){
    first=ani.shift()
    firstAnim.push(first)
  }
  if(directAnim == "last"){
    last=ani.pop()
    lastAnim.push(last)
  }
}

animals(anim)
animals(anim)

console.log(firstAnim)
console.log(lastAnim)
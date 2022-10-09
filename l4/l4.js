// 1 задание---------------------------------

// const userWallet = {
//   amountUsa: 34,
//   amountEuro: 12,
//   amountUa: 6740, 
// };
// let banks = [
//   {
//     name:usa,
//     buy:40,
//     sell:44,
//   },
//   {
//     name:euro,
//     buy:30,
//     sell:34,
//   },
//   {
//     name:ua,
//     buy:
//   }
// ];


// 2 задание---------------------------------

const move =function(dir){
  let x = 0;
  let y = 0;
  if(dir=='n'){
    y+=10
  }
  else if(dir=='e'){
    x+=10
  }
  else if(dir=='s'){
    y-=10
  }
  else if(dir=='w'){
    x-=10
  };
  let message = 'your current position x = ${x}, y= ${y}'

  return message;
};

const moveUser = function(steps){
  while(steps){
    steps--;
    console.log(steps)
    let direction = prompt('direction?, n e s w');
    console.log(direction);
    return move(direction);
  }
}

console.log(moveUser(2))

// 3 задание---------------------------------

let someData = [];

const addSomeData = function (array){
  for(let c=0; c<8; c++){
    array.push('Keep');
    array.push('Remove');
  };
  array.pop();
  return array;
};

console.log(addSomeData(someData));


const delSomeData = function (array){
  
  let c=0;
  while(c<someData.length){
    if(someData.length == 0){
      alert('delete nothing');
      break;
    }
    else{
      c+=1;
      delete someData[c];
      c+=1;
      // console.log(someData);
    };
  }
  // for (const iterator of array) {
  //   console.log(array[iterator]);
  // };
  return array;
};

console.log(delSomeData(someData));


// 4 задание---------------------------------------------------

// let figurs = [
//   {
//     figure:"circle",
//     radius:10
//   },
//   {
//     figure:'Squar',
//     sizeA:4,
//     sizeB:4
//   },
//   {
//     figure:'Rectangle',
//     sizeA:4,
//     sizeB:8
//   }
// ];

// function schet(obj){
//   return
// }

// console.log(schet());


// 5 задание---------------------------------------------------

let someValue1 = [2,3,5,4,8,7,9,10], someValue2 = [2.5,3.2,5.4,4.6,8.3,7.1,9.5,10.02];

function multiply(array){
  let newArray = array;
  // for (const iterator of newArray) {
  //   console.log(iterator)
  //   console.log(newArray[iterator])
  //   if(newArray[iterator]%2 == 0){
  //     console.log(newArray[iterator])
  //     newArray[iterator]*=4;
  //     console.log(newArray);
  //   }
  // }
  for(let c=0;c<newArray.length;c++){
    if(newArray[c]%2 ==0){
      newArray[c]*=4;
    }
  }
  return newArray;
}

console.log(multiply(someValue1));


// 6 задание---------------------------------------------------

function rounded(array){
  let newArray=[];
  for(let c=0; c<array.length;c++){
    let res = Math.ceil(array[c]);
    newArray.push(res);
  }
  return newArray;
}

console.log(rounded(someValue2))


// 7 задание---------------------------------------------------

const randomteen = function(){
  let randArray = [];
  for(let c=0;c<10;c++){
    let randNumber = Math.round(Math.random()*100)
    randArray.push(randNumber)
  }
  return randArray
}

console.log(randomteen())

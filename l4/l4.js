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

let x=0, y=0;
let position = [x, y];

const wordsUpper =function(word, dirArray){
  let upDir =['n','в','вверх','north','up','upper','above','выше'];
  let rightDir =['e','вправо',"п",'east'];
  let leftDir =['w','west',"влево","л"];
  let downDir =['s','south','вниз','н'];
  let objects =[upDir, rightDir,leftDir,downDir]
  
  let lowercase = word.toLowerCase();

  for (const iterator of objects[dirArray]) {
    if(iterator == lowercase){
      return true
    }
  }
  
}
const move =function(dir){
  let message ='nothing'
  // if(dir=='n' || dir=='в' || dir=='up'){
  //   position[1]+=10
  //   message = 'Идёт перемещение вверх'
  // }
  if(wordsUpper(dir,0)){
    position[1]+=10
    message = 'Идёт перемещение вверх'
  }
  else if(wordsUpper(dir,1)){
    position[0]+=10
    message = 'Идёт перемещение вправо'
  }
  else if(wordsUpper(dir,3)){
    position[1]-=10
    message = 'Идёт перемещение вниз'
  }
  else if(wordsUpper(dir,2)){
    position[0]-=10
    message = 'Идёт перемещение влево'
  };
  console.log(message)
  return 'x = ' + position[0] + ' and y = ' + position[1];
};

const moveUser = function(steps){
  if(steps=='more'){
    steps = prompt('how much steps?')
  }
  let position
  while(steps){
    steps--;
    let direction = prompt('direction?, (n e s w) или (в п н л)');
    position = move(direction);
    // console.log(position)
  }
  return console.log('your current pos '+ position);
}

// console.log(moveUser(2))


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
    // if я знаю что не работает. но не знаю почему!
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

let figurs = [
  {
    figure:"circle",
    radius:10
  },
  {
    figure:'Squar',
    sizeA:4,
    sizeB:4
  },
  {
    figure:'Rectangle',
    sizeA:4,
    sizeB:8
  }
];

function schet(array){
  obj1 = array[0];
  let circleRes = "scho?";
  obj2 = array[1];
  let squareRes = obj2.sizeA * obj2.sizeB;
  obj3 = array[2];
  let rectRes = obj3.sizeA * obj3.sizeB;

  return 'Circle S=' + circleRes + ' Square S=' + squareRes + ' Rectangle S=' + rectRes;
}

console.log(schet(figurs));


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

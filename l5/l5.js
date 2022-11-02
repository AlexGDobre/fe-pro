// 1задание---------------------------------------

function UserInfo(fullName, age){
  this.fullName = fullName;
  this.age = age;
};

UserInfo.prototype.callInfo = function(obj){
  // return '${obj.fullName} old: ${obj.age}'
  return obj.fullName + obj.age
}
UserInfo.prototype.updateKeyData = function(arraylength){
  console.log(arraylength)
  arraylength.fullName = prompt('new name');
  arraylength.age = prompt('age')
  console.log(arraylength.fullName, arraylength.age)
  console.log(arraylength)
  sortByAge(arrayUsers)
  return arraylength
}
const experimentalUser1 = new UserInfo('AlexGlad', '21');
const experimentalUser2 = new UserInfo('NazarTop','20')
const experimentalUser3 = new UserInfo('AlinaKov', '17')
const experimentalUser4 = new UserInfo('CateKun','46')

let arrayUsers = [experimentalUser1, experimentalUser2, experimentalUser3, experimentalUser4];
// console.log(arrayUsers)
// const userAge =[];

const sortByAge = function(array){
  let sortAgeToOld=[], sortAgeFromOld=[];
  for(let c=0; c<array.length;c++){
    let obj = array[c];
    let age = obj.age;
    // userAge.push(age)
    sortAgeToOld.push(age)
    sortAgeFromOld.push(age)
  }
  sortAgeToOld.sort(function(a,b){return a-b});
  sortAgeFromOld.sort(function(a,b){return b-a})
  console.log(sortAgeToOld)
  console.log(sortAgeFromOld)
}

sortByAge(arrayUsers)


// 2задание---------------------------------------

function ObjConstructor(a, b){
  this.a = a;
  this.b = b;
}
// const value = function(){
//   let a = prompt('a')
//   let b = prompt('b')
//   let object = new ObjConstructor(a,b)
//   return object
// }
// console.log(value())
let object = new ObjConstructor(5,10)
console.log(object)
ObjConstructor.prototype.S = function(obj){
  return obj.a * obj.b
}
ObjConstructor.prototype.P = function(obj){
  return 2*(obj.a+obj.b)
}
ObjConstructor.prototype.d = function(obj){
  return 
}
// ObjConstructor.prototype.S=(obj)=>'ploscha = '+ {obj.a * obj.b};


// 3задание---------------------------------------

let name = 'alex'

// console.log(name.length)

function string(name){
  let l = name.length
  let firstLetter = name[0]
  let lastLetter = name[l-1]
  if(name.length>3){
    return name.slice(0,3)+'...'
  }
  return firstLetter + lastLetter
}
console.log(string('bod'))
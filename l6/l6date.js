console.log('3 task--------------------------------')

const sort = [true, 'false', 111, -0, 'true', false, {b:false, a:false}, [true, 'false']];

function getBoolean(arr) {
    let result = [];
    // let iArr = [];
    // let keyValue;
    for (let i of arr) {
        if (typeof i === 'boolean'){
          result.push(i)
        }
        else if(typeof i === 'object'){
          // console.log(i, 'typeof obj')
          for(let key in i){
            // console.log(i[key])
            if(typeof i[key] == 'boolean'){
              result.push(i[key])
            }
          }
        }
    }
    return result;
}

console.log(getBoolean(sort));



console.log('4 task-------------------------------')

function centuary(year) {
  let str = year.toString();
  let cent = str[0] + str[1];
  let res = parseInt(cent)
  if((str[2] + str[3])>0){
    return res +1
  }
  return res
}

console.log(centuary(1700))
console.log(centuary(1701))



console.log('5 task--------------------------------')

let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

function days(value){
  let date = new Date()
  
  return date.value
}

console.log(days('10'))
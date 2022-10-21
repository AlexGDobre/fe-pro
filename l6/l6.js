// 1задание-------------------------------------

function sum(...arg){
  let lengthArr = arg.length
  return lengthArr
}

console.log(sum(2,4,9,'0',true,'false'))


// 2задание-------------------------------------

function birdday(){
  let birddayData = prompt("your birdday plz", 'day,month,year')
  let bdArray = birddayData.split('.')
  let bdDate = new Date(bdArray[2], bdArray[1]-1, bdArray[0])
  const todayDate = new Date();
  if(bdDate.getDate() == todayDate.getDate() && bdDate.getMonth() == todayDate.getMonth()){
    return ('Happy Birdday! )')
  }
}

console.log(birdday())


// 3задание-------------------------------------

// ya slomavsya


// 4задание-------------------------------------

function centuary(year){
  let res;
  if(year <= 1500){
    return res = '15 and below'
  }
  else if(year <= 1600){
    return res = 16
  }
  else if(year <= 1700){
    return res = 17
  }
  else if(year <= 1800){
    return res =18
  }
  else if(year <= 1900){
    return res = 19
  }
  else if(year <= 2000){
    return res=20
  }
  else if(year <= 2100){
    return res=21
  }
}

console.log(centuary(prompt('enter year')));


// 5задание-------------------------------------

function days(month){
  let message = `In ${month}`
  switch(month){
    case 'oct':
      return `${message} 31 days`
    case 'nov':
      return `${message} 30 days`
    default:
      return `${message} 29 days`
  }
}

console.log(days(prompt('which months?')))
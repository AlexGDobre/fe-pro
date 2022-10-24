window.onload = () => {
  let [...liElem] = document.getElementsByTagName('li')
  let [...liElem2] = document.querySelectorAll('header .menu-list li')
  console.log(liElem);
  console.log(liElem2)
  for(let c=0; c<liElem.length; c++){
    liElem[c].innerHTML = `${c+1}`
  }
  let insideLi = document.querySelector('.menu-list li')
  let parentBlock = insideLi.parentNode
  console.log(parentBlock)

  // let [...blockElem] = document.getElementsByClassName('block')
  // console.log(blockElem)
  // let divData = blockElem.map(item => item.textContent)
  // console.log(divData)


  // let insideHeader = document.querySelector('header')
  // parentBlock = insideHeader.parentNode
  // console.log(insideHeader)
  // console.log(parentBlock)

  // let insideUl = document.querySelector('ul')
  // parentBlock = insideUl.parentNode
  // console.log(insideUl)
  // console.log(parentBlock)


  // 4задание---------------------------------------------

  let liElemActiveNext = [];
  for (const li of liElem2) {
    if(li == document.querySelector('.active'))
      liElemActiveNext.push(li.nextElementSibling)
  }
  console.log(liElemActiveNext)


  console.log('5 задание------------------------')

  class AddFilm{
    constructor(year, genre, name, viewCount){
      this.year = year;
      this.genre = genre;
      this.name = name;
      this.viewCount = viewCount;
    }
    getYear(){
      return this.year
    }
  }

  let IJ1 = new AddFilm(1981, ['adventure'], 'Indiana Jones: Raiders of the Lost Ark', 100)
  let berserk = new AddFilm(1997, ['dark fantasy'], 'Berserk', 80)
  let tLotR1 = new AddFilm(2001, ['fantasy'], 'The Lord of the Rings: The Fellowship of the Ring', 200)
  let PF = new AddFilm(1994,['action'],'Pulp Fiction', 150)
  let MiA = new AddFilm(2017,['horror', 'drama', 'fantasy', 'adventure'], 'Made in Abyss', 130)


  console.log('7 задание------------------------')

  let films = [IJ1, berserk, tLotR1, PF, MiA]
  // console.log(films)

  function sortByView(arr){
    let sortByIncre = []
    arr.forEach(item => {
      sortByIncre.push(item.viewCount)
    });
    return sortByIncre.sort((a,b) => a-b)
  }

  console.log(sortByView(films))


  console.log('6 задание------------------------')

  function sortByYear(arr){
    let sortByIncre = []
    arr.forEach(item => {
      sortByIncre.push(item.year)
    });
    return sortByIncre.sort((a,b) => a-b)
  }

  console.log(sortByYear(films))


  console.log('8 задание------------------------')

  // let childrens = document.querySelector('body')
  // let HFN =childrens.children;
  let HFN = [document.querySelector('header'), document.querySelector('footer'), document.querySelector('nav')]
  console.log(HFN)
}
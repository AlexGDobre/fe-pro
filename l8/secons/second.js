window.onload=()=>{
  let images =[
    {
      imgPath:'img/omagad.png',
      alt:'omagad cat',
      href:'https://twitter.com/DontShowYourCat'
    },
    {
      imgPath:'img/holodno.png',
      alt:'cat brrr',
      href:'https://twitter.com/cat_auras'
    },
    {
      imgPath:'img/opossumonbeach.png',
      alt:'possum on beach with on background Sun going down',
      href:'https://twitter.com/PossumEveryHour'
    },
    {
      imgPath:'img/weirdcat.png',
      alt:'a cat with the witch hat',
      href:'https://twitter.com/Should_have_cat'
    },
    {
      imgPath:'img/weasel.png',
      alt:'weasel as a mage',
      href:'https://twitter.com/my_weasel_life'
    }
  ]
  
  let mainList = document.querySelector('.listofLinks');

  const createLink = function(obj){
    obj.forEach(item => {
      let li = document.createElement('li');
      mainList.appendChild(li);
      let aLink = document.createElement('a');
      aLink.setAttribute('href',`${item.href}`);
      li.appendChild(aLink)

      let imgCont = document.createElement('img');
      imgCont.setAttribute('src', `${item.imgPath}`);
      imgCont.setAttribute('alt', item.alt)
      
      aLink.appendChild(imgCont)
    });
  }

  createLink(images)
}
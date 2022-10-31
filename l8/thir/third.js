window.onload=()=>{
  function createField(count){
    if(count>23){
      count=23
    }
    let mainfield =document.querySelector('.field');
    mainfield.setAttribute('style','display:flex;justify-content:center;align-items:center;min-width:100px;min-height:100px;background:lightblue')

    let field =document.querySelector('.infield');
    field.setAttribute('style',`display:grid;grid-template-columns:repeat(${count+1}, 70px);grid-template-rows:repeat(${count+1},70px)`);

    for (let c = 0; c < (count+1)*(count+1); c++) {
      let div = document.createElement('div');
      div.setAttribute('style','background:transparents;border:2px solid black;font-size:40px;text-align:center;');
      field.appendChild(div)
    }


    let allDivs =document.querySelectorAll('div');

    let plus=(count+1);
    let multiply = 0;
    for(let c=0; c<count; c++){
      let p =document.createElement('p');
      multiply +=plus;
      let takeDiv = allDivs[multiply];
      takeDiv.innerText=c+1;
      takeDiv.style.cssText +='border-right: 5px solid black;';
    }

    let alphabet = 'A B C D E F G H I K L M N O P Q R S T V X Y Z';
    let letters = alphabet.split(' ');
    for(let c=0; c<count; c++){
      let takeLetter = letters[c];
      let takeDiv = allDivs[c+1];
      takeDiv.innerText=takeLetter;
    }
    
  }
  createField(100)
}
window.onload=()=>{

  let regForm = document.querySelector('.registration');
  let logForm = document.querySelector('.login');

  let regBlock = document.querySelector('.registration>div');
  let logBlock = document.querySelector('.login>div')

  let reg = document.querySelector('#registerBtn');
  let [...logBtns] = document.querySelectorAll('.loginBtn');

  // function openForm(form,block,e){
  //   console.log(form)
  //   form.classList.toggle('hide');

  //   let blockStyles = getComputedStyle(block);
  //   let value=blockStyles.height;
  //   let [...valArr]=value;

  //   let inHe =window.innerHeight;

  //   form.style.height=inHe+'px';
    
  //   for (let c = 0; c < valArr.length; c++) {
  //     if(valArr[c]=='.'){
  //       valArr=valArr.slice(0,c);
  //       value=valArr[0]+valArr[1]+valArr[2];
  //     }
  //   }
  //   block.style.top= ((inHe/2) - (value/2))+'px';

  //   form.onclick=(e)=>{
  //     if(e.target == form){
  //       form.classList.toggle('hide')
  //     }
  //   }
  // }

  // reg.addEventListener('click',openForm(regForm,regBlock),true);

  function computedValue(block){
    let blockStyles = getComputedStyle(block);
    let value=blockStyles.height;
    let [...valArr]=value;
    
    for (let c = 0; c < valArr.length; c++) {
      if(valArr[c]=='.'){
        valArr=valArr.slice(0,c);
        value=valArr[0]+valArr[1]+valArr[2];
      }
      if(valArr[c] == 'p'){
        valArr=valArr.slice(0,c);
        console.log(valArr)
        let val=''
        valArr.forEach(elem=>{
          val += elem
        })
        return val
      }
    }
    return value
  }

  reg.onclick=(e)=>{
    regForm.classList.toggle('hide');

    // let regBlockStyles = getComputedStyle(regBlock);
    // let value=regBlockStyles.height;
    // let [...valArr]=value;

    let inHe =window.innerHeight;

    regForm.style.height=inHe+'px';
    
    // for (let c = 0; c < valArr.length; c++) {
    //   if(valArr[c]=='.'){
    //     valArr=valArr.slice(0,c);
    //     value=valArr[0]+valArr[1]+valArr[2];
    //   }
    // }
    let value = computedValue(regBlock);
    
    regBlock.style.top= ((inHe/2) - (value/2))+'px';

    regForm.onclick=(e)=>{
      if(e.target == regForm){
        regForm.classList.toggle('hide')
      }
    }

  }

  logBtns.forEach(btn => {
    // btn.addEventListener('click',openForm(logForm,logBlock),true);
    btn.onclick=function(e){
      if(btn == logBtns[0]){
        regForm.classList.toggle('hide');
      }
      
      logForm.classList.toggle('hide');

      // let logBlockStyles = getComputedStyle(logBlock)
      // let value=logBlockStyles.height;
      // let [...valArr]=value;
      // console.log(valArr)


      let inHe =window.innerHeight;
      
      logForm.style.height=inHe+'px';
      
      // for (let c = 0; c < valArr.length; c++) {
      //   if(valArr[c]=='.'){
      //     valArr=valArr.slice(0,c);
      //     value=valArr[0]+valArr[1]+valArr[2];
      //   }
      // }
      let value = computedValue(logBlock);

      logBlock.style.top= ((inHe/2) - (value/2))+'px';

      logForm.onclick=(e)=>{
        if(e.target == logForm){
          logForm.classList.toggle('hide')
        }
      }
    }
  });

  let [...inputs] = myForm.elements;

  regForm.onsubmit=(e)=>{
    let isValid =true;
    for (let c = 0; c < inputs.length-2; c++) {
      if(inputs[c].value.length == 0){
        isValid = false;
      }
      if(c==4){
        if(inputs[3].value !== inputs[c].value){
          isValid=false;
          alert('пароли не совпадают')
        }
      }
    }
    if(!isValid){
      e.preventDefault();
      alert('не все поля введены!')
    }
    else{
      alert('good')
    }
  }


  let [...logInputs] = myLogForm.elements;
  const [name,pass,btn]=logInputs;
  let knopkaSUKA=document.querySelector('#loginFormBtn')

  knopkaSUKA.onclick=(e)=>{
    knopkaSUKA.style.backgroundColor='#red';
  }
  logForm.onchange=(e)=>{
    console.log(!!name.value)
    if(!!name.value && !!pass.value){
      btn.removeAttribute('disabled')
    }
  }

}
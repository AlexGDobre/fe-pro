window.onload=function(e){
  let btn_logRelog = document.querySelector('.logRelog');

  const isLog=function(){
    window.sessionStorage.isLogin=true;
    console.log('логин успешен')
    btn_logRelog.innerText='Выйти';
    btn_logRelog.removeEventListener('click', isLog);
    btn_logRelog.addEventListener('click', isNotLog);
  }
  const isNotLog=function(){
    window.sessionStorage.isLogin=false;
    console.log('теперь ты разлогинился')
    btn_logRelog.innerText='Войти';
    btn_logRelog.removeEventListener('click', isNotLog);
    btn_logRelog.addEventListener('click', isLog);
  }

  btn_logRelog.addEventListener('click', isLog);  

  if(window.sessionStorage.isLogin == 'false'){
    console.log('ты не залогинен. войди в аккаунт');
    btn_logRelog.innerText='Войти';
    btn_logRelog.addEventListener('click', isLog);
  }
  if(window.sessionStorage.isLogin=='true'){
    console.log('ты уже залогинен')
    btn_logRelog.innerText='Выйти';
    btn_logRelog.removeEventListener('click', isLog);
    btn_logRelog.addEventListener('click', isNotLog);
  }



  let r = document.querySelector(':root');
  r.style.setProperty('--body-bg', window.sessionStorage.bodyBg);

  let colorPicker=document.querySelector(`[type='color']`);

  colorPicker.onchange=(e)=>{
    let color = e.target.value;
    r.style.setProperty('--body-bg', color);
    window.sessionStorage.setItem('bodyBg', color);
    // window.sessionStorage['bodyBg2']=color;
    // window.sessionStorage.bodyBg3 = color;
  }
  
  reg.nick.onchange=(e)=>{
    let data = e.target.value;
    let pattern = /^[\w\W]{2,}/g;
    // let res = data.match(pattern);
    let res=pattern.test(data)
    console.log('nick ',res);
    if(data.length<2){
      console.log('Длина никнейма не должна быть меньше 2 символов');
    }
  }
  reg.email.onchange=(e)=>{
    let data=e.target.value;
    let pattern =/^[\w]*@[a-z]*\.[a-z]*/;
    // let res = data.match(pattern)
    let res = pattern.test(data)
    console.log('mail ',res);
    if(!res){
      console.log('ваш емейл не коректен')
    }
  }
  reg.tel.onchange=(e)=>{
    let data =e.target.value;
    let pattern = /^\+38[0-9]{10}/;
    let res =data.match(pattern);
    // let res=pattern.test(data);
    console.log('tel ',res)
    if(!res){
      console.log('ваш телефон введён не коректно')
    }
  }
  reg.pin.onchange=(e)=>{
    let data = e.target.value;
    // let data = 2568;
    let pattern = /^[0-9]{4}/
    // let res = pattern.test(data);
    let res = data.match(pattern);
    console.log('pincode ',res);
    if(!res){
      console.log('ваш пин код не коректен')
    }
  }

 
  const countUppercase = function(){
    console.log('─Task 2 "matchUppercases"─')
    // let str = prompt('string');
    let str= 'gbGADBghbAbfhHu';
    let res= str.match(/[A-Z]/g);
    console.log('uppercases are ' + res.length);
  };
  countUppercase();

  const clearStr = function(){
    console.log('─Task 3 "clear str"─')
    let str='ma4y i9 cl34ea0r y31ou?';
    // let str='hell5o wor6ld';
    let num = str.match(/\d/g);
    let sum = '';
    for (let c = 0; c < num.length; c++) {
      sum +=num[c]
    }
    sum=parseInt(sum);
    console.log(sum);
    console.log('numbers from string is '+sum);
  };
  clearStr();

  const addressPage = function(){
    console.log('─Task 6 "url"─');
    // let url = e.srcElement.URL;
    let url = "https://prog.academy/?page=1";
    console.log(url)
    let pattern = /^(?:http|https)\W{3}[a-zA-Z0-9.:]*\//
    let res = url.match(pattern)
    console.log(res[0])
  };
  addressPage();
}
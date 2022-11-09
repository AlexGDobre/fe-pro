window.onload=()=>{
  let secTask=document.querySelector('.task-second');
  secTask.setAttribute('style','position:relative;')

  console.log(secTask.classList.toggle('hide'));

  let modalWind = document.querySelector('.modalWindow');
  let rect = document.querySelector('.rectInModal');

  console.log(window)
  let inHe = window.innerHeight;
  let outerHeight =window.outerHeight;

  modalWind.setAttribute('style','background:rgba(0,0,0,0.7);width:100%;position:fixed;z-index:2;');

  rect.setAttribute('style','background:white;width:200px;height:200px;position:relative;margin:0 auto;');

  

  let callBtn = document.querySelector('#callBtn');
  let closeBtn = document.querySelector('#offModal');
  closeBtn.setAttribute('style','height:2em;')


  callBtn.addEventListener('click',(e)=>{
    modalWind.classList.remove('hide');
    modalWind.style.height= inHe + 'px';
    rect.style.top=(inHe/2)-100 + 'px';
  });


  modalWind.onclick=()=>{
    modalWind.classList.toggle('hide')
    closeBtn.addEventListener('click',(e)=>{
    modalWind.classList.toggle('hide');
  });
  }
}
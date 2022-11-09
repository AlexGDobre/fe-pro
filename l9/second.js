window.onload=()=>{
  let secTask=document.querySelector('.task-second');
  secTask.style.position='relative';
  secTask.style.order='-1';

  console.log(secTask.classList.toggle('hide'));

  let modalWind = document.querySelector('.modalWindow');
  let rect = document.querySelector('.rectInModal');

  console.log(window)
  let inHe = window.innerHeight;

  modalWind.setAttribute('style','background:rgba(0,0,0,0.7);position:relative;width:100%;display:flex;justify-content:center;');
  console.log(modalWind.style.height)
  rect.setAttribute('style','background:white;width:200px;height:200px;position:absolute;bottom:0;');

  

  let callBtn = document.querySelector('#callBtn');
  let closeBtn = document.querySelector('#offModal');


  callBtn.addEventListener('click',(e)=>{
    modalWind.classList.remove('hide');
    modalWind.style.height= (inHe - 100) + 'px';
    rect.style.bottom='-200px';
    let value1= inHe/2;

    rect.style.bottom=`200px`;
    // rect.style.transform= translate(value1, 0);
    // rect.style.translate=`${value1},${0}`
  });

  closeBtn.addEventListener('click',(e)=>{
    modalWind.classList.toggle('hide');
  });


}
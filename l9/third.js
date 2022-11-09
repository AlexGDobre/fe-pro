window.onload=()=>{
  let section=document.querySelector('.task-third');
  section.setAttribute('style','display:flex;justify-content:center;align-items:center;flex-direction:column;');
  let div = document.querySelector('.task-third div');
  div.setAttribute('style','display:flex;flex-flow:row wrap;height:170px;width:300px;background:green;');

  let imagesSrc =['img/opossum1.PNG','img/fox2.PNG',"img/rat3.PNG"]
  let img =document.createElement('img');
  div.appendChild(img);

  let count=0;  
  function setIntervalinInterval(){
    img.setAttribute('src',imagesSrc[count]);
    count++;
    if(count==3){
      count=0
    }
  }
  let interval=setInterval(setIntervalinInterval, 2000);

  let btnStop = document.querySelector('#btnStop');
  let btnSet =document.querySelector('#btnStart');

  btnStop.onclick=()=>{
    clearInterval(interval)
  };
  btnSet.onclick=()=>{
    interval=setInterval(setIntervalinInterval, 2000);
  }
}
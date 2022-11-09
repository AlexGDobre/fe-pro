window.onload =()=>{
  
  let firstSection = document.querySelector('#task-first');
  let firstbtn=document.querySelector('#btnHide');

  firstbtn.onclick=()=>{
    // headerfirst.classList.toggle('hide');
    firstSection.classList.toggle('hide');
  }
  firstSection.classList.toggle('hide');

  let headerfirst = document.querySelector('h1');
  
  
  for(let c=0;c<100;c++){
    let hundreDiv = document.createElement('div');
    hundreDiv.setAttribute('style','border:1px solid black;height:50px;width:50px;');
    firstSection.appendChild(hundreDiv);

    hundreDiv.addEventListener('click',(event)=>{
      if(event.ctrlKey){
        hundreDiv.style.background='#999'
        return
      }
      hundreDiv.style.background='red';
    },true);
  }
}
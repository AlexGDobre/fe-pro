window.onload=()=>{
  let [...btns] = document.querySelectorAll('.selectorAllIn button');
  let direction =['moveUp','moveRight','moveDown','moveLeft'];
  let dirCompile =['u','r','d','l'];

  let divAllIn=document.querySelector('.selectorAllIn');
  divAllIn.setAttribute('style','position:absolute;align-items:center;justify-items:center');

  let mainBody=document.querySelector('.mainBody');
  mainBody.setAttribute('style',`background:center no-repeat url('https://pbs.twimg.com/media/FguQFvsagAAHT6U?format=jpg&name=4096x4096');grid-area: m; background-attachment:fixed;background-size:cover; width:400px; height:400px;`);
  
  console.log(divAllIn.classList.toggle('hide'))

  let computed=getComputedStyle(divAllIn);
  let allInTop =parseInt(computed.top);
  let allInRight=parseInt(computed.right);
  let allInBottom=parseInt(computed.bottom);
  let allInLeft=parseInt(computed.left);

  setInterval(() => {
    computed=getComputedStyle(divAllIn);
    allInTop =parseInt(computed.top);
    allInRight=parseInt(computed.right);
    allInBottom=parseInt(computed.bottom);
    allInLeft=parseInt(computed.left);
  }, 100);
  
  

  for (let c=0;c<btns.length;c++) {
    btns[c].setAttribute('id',direction[c]);
    btns[c].style.gridArea= dirCompile[c];
    btns[c].style.cssText +='height:50px;width:50px';
  }

  let [top,right,down,left]=btns;

  top.onmousemove=()=>{
    divAllIn.style.top = `${(allInTop - 30)}px`;
    divAllIn.style.bottom =`${(allInBottom + 30)}px`;
  }
  right.onmousemove=()=>{
    divAllIn.style.right = `${(allInRight - 30)}px`;
    divAllIn.style.left =`${(allInLeft+30)}px`;
  }
  down.onmousemove=()=>{
    divAllIn.style.bottom = `${(allInBottom - 30)}px`;
    divAllIn.style.top = `${(allInTop +30)}px`;
  }
  left.onmousemove=()=>{
    divAllIn.style.left = `${(allInLeft - 30)}px`;
    divAllIn.style.right=`${(allInRight)+30}px`;
  }
}
window.onload=()=>{
  let orderBtn =document.querySelector('#orderBtn');
  let priceDiv = document.querySelector('.price');
  let price = 0;
  priceDiv.innerText=`0 uah`;
  let pSizeBul = false;
  let pDelivBul = false;

  let mesPizSize = '';
  let mesPizTopping = [];
  let mesPizLocation = '';


  let [...sizeInputs] = document.querySelectorAll('.pSize input');
  let sizePlusBul = true;
  let sizeOldValue = 0;
  for(let c=0;c<sizeInputs.length;c++){
    sizeInputs[c].onchange=(e)=>{
      pSizeBul= true;
      if(pDelivBul == true && pSizeBul == true){
        console.log('alo')
        orderBtn.removeAttribute('disabled')
      }
      if(!sizePlusBul){
        sizePlusBul=true
        price = price - sizeOldValue
      }
      let plus = parseInt(e.target.value);
      sizeOldValue = plus;
      sizePlusBul = false;
      price= price+plus;
      priceDiv.innerText=`${price} uah`
      if(e.target.id == 'pSizeSs'){
        mesPizSize = `small`
      }
      if(e.target.id == 'pSizeMs'){
        mesPizSize = `medium`
      }
      if(e.target.id == 'pSizeLs'){
        mesPizSize = `large`
      }
    }
  }

// чекбоксы

  let chbObj = [
    {
      title:'Tomato',
      price: 10,
      bul: true,
    },
    {
      title:'Cheese',
      price: 20,
      bul: true,
    },
    {
      title:'Mushrooms',
      price: 30,
      bul: true,
    },
    {
      title:'Olives',
      price:7,
      bul:true,
    }
  ]

  let mainToppDiv = document.querySelector('.pTopp');

  for(let c=0;c<chbObj.length;c++){
    let div = document.createElement('div');
    let input = document.createElement('input');
    input.setAttribute('id',`pTopp${c+1}`);
    input.setAttribute('type','checkbox');
    input.setAttribute('name','pTopp');
    input.setAttribute('value', `${chbObj[c].price}`)
    let label = document.createElement('label');
    label.setAttribute('for',`pTopp${c+1}`);
    label.innerText = `${chbObj[c].title}. Price ${chbObj[c].price} uah`
    div.appendChild(input);
    div.appendChild(label);
    mainToppDiv.appendChild(div)
  }

  let checkbox = document.querySelectorAll('[type="checkbox"]');
  // let first = true, dva = true, thri = true, four=true, five=true, six=true, seven=true;
  // let toppValue = ['first','dva','thri','four','five','six','seven'];

  for(let c=0;c<checkbox.length;c++){
    checkbox[c].onchange=(e)=>{

      if(e.target == checkbox[c]){
        let plus=parseInt(e.target.value)
        // if (toppValue[c]) {
        //   toppValue[c]=false;
        //   console.log(toppValue[c])
        //   price = price + plus;
        //   priceDiv.innerText=`${price} uah`
        //   return
        // }
        // else{
        //   toppValue[c]=true;
        //   console.log(toppValue[c])
        //   price = price - plus;
        //   priceDiv.innerText=`${price} uah`
        // }
        if (chbObj[c].bul) {
          chbObj[c].bul=false;
          // console.log(chbObj[c].bul)
          price = price + plus;
          priceDiv.innerText=`${price} uah`
          mesPizTopping.push(chbObj[c].title);
          // return
        }
        else{
          chbObj[c].bul=true;
          price = price - plus;
          priceDiv.innerText=`${price} uah`
          for(let cc=0; cc<mesPizTopping.length;cc++){
            if(mesPizTopping[cc] == chbObj[c].title){}
            mesPizTopping.splice(cc,cc+1)
          }
            
        }
        // if (toppValue[c] == false) {
        //   toppValue[c]=true;
        //   console.log(toppValue[c])
        //   price = price - plus;
        //   priceDiv.innerText=`${price} uah`
        // }
      }
      
    }
  }

  // конец чекбоксов


  let pDelivInput = document.querySelectorAll(`[name="pDeliv"]`);
  let delivBul =false;
  for(let c=0;c<pDelivInput.length;c++){
    pDelivInput[c].onchange=(e)=>{
      pDelivBul=true;
      if(pDelivBul == true && pSizeBul == true){
        orderBtn.removeAttribute('disabled')
      }
      if(e.target.id == 'pDelivHome'){
        mesPizLocation = 'Доставка'
        delivBul=true
        let plus = parseInt(e.target.value);
        price = price +plus;
        priceDiv.innerText=`${price} uah`
      }
      if(e.target.id == 'pDelivCafe'){
        mesPizLocation ='Забираете лично'
        if(delivBul){
          let plus = parseInt(pDelivInput[0].value);
          price = price - plus;
          priceDiv.innerText = `${price} uah`
        }
      }
    } 
  }
  
  

  orderBtn.onclick=(e)=>{
    function timeOrder(){
      let message = `Your pizza is ${mesPizSize} with topping is ${mesPizTopping}. ${mesPizLocation}`;
      let div = document.createElement('div');
      div.style.width='200px';
      div.style.minHeight='100px';
      div.style.backgroundColor='aqua';
      div.style.borderRadius='9px'
      div.style.borderStyle='solid';
      div.style.borderWidth='3px';
      div.style.borderColor='red';
      div.style.position='absolute';
      div.style.top='0px';
      div.style.textAlign='center';
      div.innerText=message;
      document.querySelector('body').appendChild(div)
      setTimeout(function(){
        div.style.display='none'
      }, 5000)
    }
    timeOrder();
    e.preventDefault();
    
  }
}
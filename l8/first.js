window.onload =() => {

  let div = document.createElement('div');
  div.setAttribute('style','background:lightgray;padding:15px;')

  let section = document.createElement('section');
  section.setAttribute('style','width:600px;margin:0 auto;')
  section.className='main-section';
  document.body.appendChild(section);
  section.appendChild(div);

  let h1 = document.createElement('h1');
  // h1.setAttribute('style','margin:10px 0px;');
  h1.style.cssText += 'font-size:34px';
  h1.textContent='To do:';
  h1.innerHTML='To do:';
  h1.innerText='To do:';
  div.appendChild(h1);

  let ul = document.createElement('ul');
  ul.setAttribute('style','list-style:none; height:290px');
  div.appendChild(ul);
  // let li = document.createElement('li');
  // li.innerText='list item1';
  // ul.appendChild(li);
  let c = 1;
  const makeli=(text)=>{
      let li = document.createElement('li');
      li.setAttribute('style','padding:10px 20px;font-size:24px;background:white;border-radius:5px;border:2px solid gray;display:flex;justify-content:space-between;');
      let pTask = document.createElement('p');
      let pDate = document.createElement('p');
      if(c>5){
        const item = ul.firstElementChild;
        ul.removeChild(item)
      }
      li.appendChild(pTask);
      pTask.innerText=text;
      li.appendChild(pDate);
      let todayDate = new Date();
      let sortDate = `${todayDate.getHours()}h:${todayDate.getMinutes()}m:${todayDate.getSeconds()}s, ${todayDate.getDate()} ${todayDate.getMonth()} ${todayDate.getFullYear()}`;
      pDate.innerText=sortDate;
      ul.appendChild(li);
      c++;
  }
  makeli('do homework');
  makeli('buy products');
  makeli('make supper');
  makeli('meet parents');
  makeli(prompt('also'));
  makeli(prompt('also'));


  let form = document.createElement('form');
  div.appendChild(form);

  let divForm = document.createElement('div');
  divForm.setAttribute('style','display:flex;align-items:center;');
  form.appendChild(divForm);

  let label = document.createElement('label');
  label.setAttribute('for','textTask');
  label.setAttribute('style','padding:0px 30px')
  label.textContent='Task';
  divForm.appendChild(label);

  let input = document.createElement('input');
  input.setAttribute('type','text')
  input.setAttribute('placeholder','What do you need to do?');
  input.setAttribute('id','textTask');
  input.setAttribute('style','width:100%;padding:10px')
  divForm.appendChild(input);

  let btn = document.createElement('button');
  btn.innerText='pin task';
  btn.setAttribute('style','position:relative;right:0px;background:blue;color:white;border-radius:5px;font-size:20px;padding:0.5em;border:none;margin-top:20px;');
  btn.onclick = function(){
    let text = prompt('результат есть но жаль кнопка рефрешит страницу -_-')
    console.log(text, 'prompt text')
    return makeli(text)
  }
  divForm.after(btn);

}
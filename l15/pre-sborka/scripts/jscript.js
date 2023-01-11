window.onload=()=>{
  document.querySelector('h2').onmouseover=function(){
    this.style.color='red';
  }
  document.querySelector('h2').onmouseout=function(){
    this.style.color='gray';
  }
  // let h2=document.querySelector('h2');
  // h2.style.color='red';
}
// $(window).ready(function(){
//   $("h2").on("mouseover",function(){
//     $(this).css("color","red");
//   })
// })
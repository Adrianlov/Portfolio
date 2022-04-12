function contact(){
  document.getElementById("popup-1").classList.toggle("active");
}
function onClickMenu(){
  document.getElementById("menu").classList.toggle("change");
}

const navSlide = () => {

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav_links');

  burger.addEventListener('click',()=>{
  nav.classList.toggle('nav-active');
});
}

navSlide();

function change(){
  document.getElementById("line3").addEventListener('click',()=>{
   change.style.backgroundColor = "white";
  });   

}

change();















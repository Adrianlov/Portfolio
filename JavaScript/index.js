function contact(){
  document.getElementById("popup-1").classList.toggle("active");
}



const navSlide = () => {

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav_links');
  const line = document.getElementById("menu");

  burger.addEventListener('click',()=>{ 
  nav.classList.toggle('nav-active');
  line.classList.toggle("change");
});
}

navSlide();




  


 
  



  
  
  
  
  
  
  
  
  
  
  
  
  

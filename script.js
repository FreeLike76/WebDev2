let header = document.querySelector("header");
let upButton = document.querySelector(".upButton");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 50);
})
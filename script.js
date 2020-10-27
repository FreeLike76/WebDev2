let header = document.querySelector("header");
let upButton = document.querySelector(".upButton");
let formCheck = document.getElementById("formRules");
let formButton = document.getElementById("formButton");

formCheck.onchange = function() {
    formButton.disabled = !this.checked;
  };

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 50);
    upButton.classList.toggle("anim",window.scrollY > 0);
})
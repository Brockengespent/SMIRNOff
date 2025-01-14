'use strict'

document.addEventListener('keypress', function(a){
    if(a.key === 'ArrowRight'){
        document.querySelector(".card-container").scrollTo({ left: 900, behavior: "smooth" });
    }
}  )
document.addEventListener('keypress' , function(b){
    if(b.key === 'ArrowLeft'){
        document.querySelector(".card-container").scrollTo({left:-900, behavior: "smooth"});
    }
})

document.onreadystatechange = () =>{
    if(document.readyState != "complete"){
        document.querySelector("#load").style.visibility="visible";
        document.body.style.visibility="hidden";
    }
    else{
        document.querySelector("#load").style.visibility="hidden"
        document.body.style.visibility="visible";
    }
}

document.addEventListener('keydown' , function(e){
    if(e.key === 'Escape'){
        closeNav()
    }
})

let openNav = function () {
    document.getElementById("sideNav").style.width = "700px";
    document.getElementById("main").style.marginLeft = "700px";
    if(window.screen.width <= '576'){
    document.getElementById("sideNav").style.width = "100vw";
    document.getElementById("main").style.marginLeft = "0px";
    console.log(window.screen.width);
    }
}
const closeNav = function() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

const modal = document.querySelector('.modal');
const modal2 = document.querySelector(".modal-2");
const overlay = document.querySelector('.overlay');
const overlay2 = document.querySelector(".overlay-2");
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal2 = document.querySelector(".close-modal-2");
const btnOpenModal2 = document.querySelectorAll(".show-modal-2");

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
for(let i = 0; i<btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', openModal)
}
btnCloseModal.addEventListener('click' , closeModal);
overlay.addEventListener('click' , closeModal);
document.addEventListener("keydown", function (v) {
  if (v.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});


const openModal2 = function () {
    modal2.classList.remove("hidden");
    overlay2.classList.remove("hidden");
};
const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay2.classList.add("hidden");
};
for (let r = 0; r < btnOpenModal2.length; r++) {
  btnOpenModal2[r].addEventListener("click", openModal2);
}
btnCloseModal2.addEventListener("click", closeModal2);
overlay2.addEventListener("click", closeModal2);
document.addEventListener("keydown", function (w) {
  if (w.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
  }
});

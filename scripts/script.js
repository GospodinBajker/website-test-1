//Kod za home page
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
}

document.querySelector('#close-navbar').onclick = () =>{
  navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
};

window.onscroll = () =>{
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
};

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
};

//Kod za swiper sekcija usluge
var swiper = new Swiper(".services-slider", {
  loop: true,
  grabCursor : true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// Kod za modal - Get the modal
var btn = document.querySelectorAll("button.myBtn");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}












//Funkcija za aparati sekciju lagani slajd
const addCardButton = () => {
  const cardButton = document.querySelector(".card-btn");
  const closeButton = document.querySelector(".close-btn");
  if (!cardButton) return;
  const productDetails = document.querySelector(".product-details");
  cardButton.addEventListener("click", () => {
    productDetails.classList.add("show");
  });
  closeButton.addEventListener("click", () => {
    productDetails.classList.remove("show");
  });
};

addCardButton();

//Funkcija za modal window na service.html
/*
document.addEventListener('DOMContentLoaded', function() {
  const smallImages = document.querySelectorAll('.small-image');
  const imageModals = document.querySelectorAll('.image-modal');

  smallImages.forEach((smallImage, index) => {
    smallImage.addEventListener('click', function() {
      imageModals[index].style.display = 'block';
    });
  });

  const closeButtons = document.querySelectorAll('.close');

  closeButtons.forEach((closeButton, index) => {
    closeButton.addEventListener('click', function() {
      imageModals[index].style.display = 'none';
    });
  });
}); */




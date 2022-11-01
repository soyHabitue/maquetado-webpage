//Open menu button
var mobileMenu = document.getElementById("mobile-menu");

function openNav() {
  mobileMenu.classList.replace("hide", "show");
}
function closeNav() {
    mobileMenu.classList.replace("show", "hide");
}

/* INICIO SLIDER HISTORIAS DE EXITO */
const slideContainer = document.querySelector('.stories-carousel-container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 4000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${(-slideWidth - 4*16) * index}px)`;

const startSlide = ()=> {
  slideId = setInterval(() => {
      nextSlide();
  }, interval);
}

const getSlides = () => document.querySelectorAll('.slide');


slide.addEventListener('transitionend', () => {
    slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${(-slideWidth - 4*16) * index}px)`;
  }
  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${(-slideWidth - 4*16) * index}px)`;
  }
  const activeElem = slides[index];
  const lastElem = slides[index - 1];
  const nextElem = slides[index + 1];
  
  slides.forEach(delClass => {
    //remove class from all slides
    delClass.classList.remove("active-slide");

    //add active class just to index
    activeElem.classList.add("active-slide");
  });
 

  //activeElem.classList.add("active-slide");
  
  //lastElem.classList.remove("active-slide");
  //nextElem.classList.remove("active-slide");

  /*if (activeElem) {
    activeElem.classList.add("active-slide");
  } else {
    activeElem.classList.remove("active-slide");
    }*/
});
slides[index - 1].classList.add("active-slide");



const nextSlide = () => {
  slides = getSlides();
  if(index >= slides.length -1) return;
  index++;
  slide.style.transform = `translateX(${(-slideWidth - 4*16) * index}px)`;
  slide.style.transition = 'ease-in-out .6s';
}
const prevSlide = () => {
  if(index <= 0) return;
  index--;
  slide.style.transform = `translateX(${(-slideWidth - 4*16) * index}px)`;
  slide.style.transition = 'ease-in-out .6s';
}


slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

startSlide();

/* FIN SLIDER HISTORIAS */



/* INICIO STICKY NAVBAR QUE OFRECEMOS */
// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickNav()};

// Get the navbar
var navbar = document.getElementById("navbar-que-ofrecemos");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/* FINAL STICKY NAVBAR QUE OFRECEMOS */


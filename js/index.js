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
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// MOVE ACTIVE LINK TO FRONT
// Get active class
var active = document.getElementsByClassName("active");

// Scroll navbar
//active.scrollTo(10, 0);

/* FINAL STICKY NAVBAR QUE OFRECEMOS */

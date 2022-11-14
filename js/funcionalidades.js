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

//navBarScroll
$(window).scroll(function() {
  let secciones = document.querySelectorAll(".seccion-funcionalidades");  //nombre de la clase de las secciones

  let navlinks = document.querySelectorAll('.nav-link');    //nombre de la clase de los links

    secciones.forEach(sec =>{

      let top = window.scrollY;  //calcula el scroll y

      let offset = sec.offsetTop - 300;  //se puede ajustar este valor para acomodar el scroll con la seccion vista

      let heigth = sec.offsetHeight;  //altura de la seccion

      let id = sec.getAttribute('id'); //agarra el id de la seccion

      let seccion = 'seccion-'+ id;  //nombre de la seccion + id

      if(top >= offset && top < offset + heigth)
      {
        //calcula si el scroll se encuentra dentro de las secciones

        navlinks.forEach(links => {

          links.classList.remove('active');  //quita la clase activa para deseleccionar

          if(links.getAttribute('id') == seccion){  //busca si el id del navlink es igual al nombre de la seccion + id

            document.getElementById(seccion).classList.add('active');  //agrega la clase activa para seleccionar

            links.scrollIntoView({behavior: "auto" ,inline: "center"});  //centra el scroll del navbar al link segun la seccion que se encuentre
          }

        });
      }

    });
});

//Anclajes nav
function scrollToSeccion(seccion_id){

  var element = document.getElementById(seccion_id);

  var bodyRect = document.body.getBoundingClientRect(),

  elemRect = element.getBoundingClientRect(),

  offset   = elemRect.top - bodyRect.top -225 ;

  window.scrollTo({
       top: offset,
       behavior: "smooth"
  });

}
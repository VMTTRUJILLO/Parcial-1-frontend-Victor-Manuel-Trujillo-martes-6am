  
  
  
  console.log("Hola, este es mi primer parcial de Frontend");
  
  
  
  
  
  
  
  
  
  
  
  
  var myCarousel = document.querySelector('#carouselExampleSlidesOnly');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1000, // 1 segundo
  });


  //---Admin---
    const form = document.getElementById("loginForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // evita que se recargue la página

    // obtener valores de los inputs
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    // mostrar en consola
    console.log("Usuario ingresado:", usuario);
    console.log("Clave ingresada:", clave);
  });

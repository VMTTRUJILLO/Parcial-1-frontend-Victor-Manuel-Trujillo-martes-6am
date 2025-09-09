  
  
  
  console.log("Hola, este es mi primer parcial de Frontend");
  console.log("Mi nombre es Victor Hugo Rojas Rojas");
  
  
  
  
  
  
  
  
  
  
  
  var myCarousel = document.querySelector('#carouselExampleSlidesOnly');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1000, // 1 segundo
  });




 //--Noticias--

 const formBusqueda = document.getElementById("form-busqueda");
  const inputBusqueda = document.getElementById("input-busqueda");

  // Evento al enviar el formulario
  formBusqueda.addEventListener("submit", function(e) {
    e.preventDefault(); // evita que se recargue la página
    console.log("Texto buscado:", inputBusqueda.value); // imprime en consola lo que buscó
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

   // Botón Sign Up → redirigir a signup.html
    document.getElementById("btnSignup").addEventListener("click", () => {
      window.location.href = "SignUp.html";
    });

    // Botón Cancelar → redirigir a noticias.html
    document.getElementById("btnCancel").addEventListener("click", () => {
      window.location.href = "Noticias.html";
    });

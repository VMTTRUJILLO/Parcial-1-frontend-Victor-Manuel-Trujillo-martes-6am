  
  
  
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
    form.addEventListener("submit", function(event) {
    event.preventDefault(); // evita recargar la página

    // obtener valores
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    // mostrar en consola
    console.log("Usuario ingresado:", usuario);
    console.log("Clave ingresada:", clave);

  });


  //---SignUp---
  const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Regex
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,10}$/; // entre 7 y 10 dígitos
    const estratoRegex = /^[1-6]$/; // solo 1 a 6

    document.getElementById("signupForm").addEventListener("submit", function(e) {
      e.preventDefault(); // Evita que recargue la página

      const nombres = document.getElementById("nombres").value;
      const apellidos = document.getElementById("apellidos").value;
      const email = document.getElementById("email").value;
      const telefono = document.getElementById("telefono").value;
      const estrato = document.getElementById("estrato").value;
      const fecha = document.getElementById("fecha").value;
      const sangre = document.getElementById("sangre").value;
      const genero = document.querySelector('input[name="genero"]:checked').value;

      // Actividades seleccionadas
      const actividades = Array.from(document.querySelectorAll('input[name="actividades"]:checked'))
                               .map(cb => cb.value)
                               .join(", ");

      // Mostrar en alert
      alert(
        "Datos Registrados:\n" +
        "Nombres: " + nombres + "\n" +
        "Apellidos: " + apellidos + "\n" +
        "Email: " + email + "\n" +
        "Teléfono: " + telefono + "\n" +
        "Estrato: " + estrato + "\n" +
        "Fecha Nacimiento: " + fecha + "\n" +
        "Grupo Sanguíneo: " + sangre + "\n" +
        "Género: " + genero + "\n" +
        "Actividades: " + actividades
      );
    }); 
  });
} 
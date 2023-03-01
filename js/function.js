window.alert("¡Hola bienvenido!");

//variables
const inputnombre = document.querySelector("#inputnombre");
const inputempresa = document.querySelector("#inputempresa");
const inputemail = document.querySelector("#inputemail");
const inputtelefono = document.querySelector("#inputtelefono");
const inputdireccion = document.querySelector("#inputdireccion");
const inputciudad = document.querySelector("#inputciudad");
const inputprovincia = document.querySelector("#inputprovincia");
const inputcp = document.querySelector("#inputcp");
const textarea1 = document.querySelector("#textarea1");
const botonres = document.querySelector("#botonres");


//evento
inputnombre.addEventListener("click", cambiarColor);
inputempresa.addEventListener("click", cambiarColor);
inputemail.addEventListener("click", cambiarColor);
inputtelefono.addEventListener("click", cambiarColor);
inputdireccion.addEventListener("click", cambiarColor);
inputciudad.addEventListener("click", cambiarColor);
inputprovincia.addEventListener("click", cambiarColor);
inputcp.addEventListener("click", cambiarColor);
textarea1.addEventListener("click", cambiarColor);


//funcion cambiar color
function cambiarColor(){
  inputnombre.classList.add('bg-info');
  inputempresa.classList.add('bg-info');
  inputemail.classList.add('bg-info');
  inputtelefono.classList.add('bg-info');
  inputdireccion.classList.add('bg-info');
  inputciudad.classList.add('bg-info');
  inputprovincia.classList.add('bg-info');
  inputcp.classList.add('bg-info');
  textarea1.classList.add('bg-info');
}

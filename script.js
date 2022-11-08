// INDEX
// Para todos los nav
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}

// declaracion de variables 
let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");
// efecto cuando abrimos o selecionamos un producto
function cargar(item) {
  quitarBordes();
  mostrador.style.width = "60%";
  seleccion.style.width = "40%";
  seleccion.style.opacity = "1";
  item.style.border = "2px solid red";
  // imagen que se muestra en la parte del producto
  imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

  modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;
  // texto que se insertara en la descripcion del producto
  descripSeleccionada.innerHTML = "La mantequilla de maní, o crema de cacaguate también comercializada con el nombre de mantequilla de maní, crema de cacahuate, crema de maní o pasta de cacahuate, es una pasta elaborada a base de cacahuete tostado y molido. Además, puede contener otros aditivos para modificar su sabor o textura. ";
  // parte que se observa en el precio
  precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML;


}
// efecto cuando se cierra el recuadro del producto
function cerrar() {
  mostrador.style.width = "100%";
  seleccion.style.width = "0%";
  seleccion.style.opacity = "0";
  quitarBordes();
}
// selecciona la cantida del producto
function quitarBordes() {
  var items = document.getElementsByClassName("item");
  for (i = 0; i < items.length; i++) {
    items[i].style.border = "none";
  }
}

// NOSOTROS
const categorias = document.querySelectorAll('#categorias .categoria');
// es unn metodo y seleccionamos todo que esta e esa categoria
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
// es u metodo y seleccionamos todo que esta e esa categoria

// let ¿, declaramos la variable limitanndo ssu alcanza
let categoriaActiva = null;
// cuando damos click activa el contenedor
// foreach recorre elementos de una coleccion
categorias.forEach((categoria) => {
  //addEventListener representa y ejecuta ua accio
  categoria.addEventListener('click', (e) => {
    categorias.forEach((elemento) => {
      // classlist accedemos a la lista, la lista elemento
      elemento.classList.remove('activa');
    });
    // Activamos el contenedor
    //currentTarget indentifica el elemnto actual de la lista y la mantiene activa
    // .togge alternamos acciones
    e.currentTarget.classList.toggle('activa');
    categoriaActiva = categoria.dataset.categoria;


    // Activamos el contenedor de preguntas que corresponde
    contenedorPreguntas.forEach((contenedor) => {
      //si el contenedor de la categoria es igual a categoriaActiva muestra el cotenedor
      // y si no lo va a remover
      if (contenedor.dataset.categoria === categoriaActiva) {
        contenedor.classList.add('activo');
      } else {
        contenedor.classList.remove('activo');
      }
    });
  });
});


//FORMULARIO
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var sendError = document.getElementById('send-error');

function validateName() {
  var name = document.getElementById('contact-name').value;

  if (name.length == 0) {
    nameError.innerHTML = 'Nombre requerido';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Escriba su nombre completo'
    return false;
  }
  nameError.innerHTML = '';
  return true;

}

function validatePhone() {
  var phone = document.getElementById('contact-phone').value;

  if (phone.length == 0) {
    phoneError.innerHTML = 'Telefóno requerido';
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = 'Su telefono debe ser de 10 digitos';
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = 'Solo se permiten digitos'
    return false;
  }
  phoneError.innerHTML = '';
  return true;

}

function validateEmail() {
  var email = document.getElementById('contact-email').value;

  if (email.length == 0) {
    emailError.innerHTML = 'Correo electrónico requerido'
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Este no es un correo valido'
    return false;
  }

  emailError.innerHTML = ''
  return true;

}

function validateMessage() {
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + ' carácteres faltantes'
    return false;
  }
  messageError.innerHTML = ''
  return true;

}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    sendError.style.display = 'block';
    sendError.innerHTML = 'Error x_x';
    setTimeout(function () { sendError.style.display = 'none'; }, 3000);
    event.preventDefault();
    return false;
  }
}

/*Reloj*/
function mueveReloj(){
  momentoActual = new Date()
  hora = momentoActual.getHours()
  minuto = momentoActual.getMinutes()
  segundo = momentoActual.getSeconds()

  str_segundo = new String (segundo)
  if (str_segundo.length == 1)
     segundo = "0" + segundo

  str_minuto = new String (minuto)
  if (str_minuto.length == 1)
     minuto = "0" + minuto

  str_hora = new String (hora)
  if (str_hora.length == 1)
     hora = "0" + hora

  horaImprimible = hora + " : " + minuto + " : " + segundo

  document.form_reloj.reloj.value = horaImprimible

  setTimeout("mueveReloj()",1000)
}

// DOM

let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");
let edadUsuario = document.getElementById("edadUsuario");
let direccionUsuario = document.getElementById("direccionUsuario");
let telefonoUsuario = document.getElementById("telefonoUsuario");
let documentoUsuario = document.getElementById("documentoUsuario");

const cambiarDatos = () => {
  let nombre = prompt("Ingresa tu nombre");

  let edad = prompt("Ingresa tu edad");

  let direccion = prompt("Ingresa tu direccion");

  let telefono = prompt("Ingresa tu telefono");

  let documento = prompt("Ingresa tu documento de identidad");

  nombreUsuario.innerHTML += nombre;
  localStorage.setItem("nombre", nombre);
  edadUsuario.innerHTML += edad;
  localStorage.setItem("edad", edad);
  direccionUsuario.innerHTML += direccion;
  localStorage.setItem("direccion", direccion);
  telefonoUsuario.innerHTML += telefono;
  localStorage.setItem("telefono", telefono);
  documentoUsuario.innerHTML += documento;
  localStorage.setItem("documento", documento);
};

const datos = {
  nombre: nombreUsuario,
  edad: edadUsuario,
  direccion: direccionUsuario,
  telefono: telefonoUsuario,
  documento: documentoUsuario,
};

Object.keys(localStorage).forEach(function (key) {
  datos[key].innerHTML += localStorage.getItem(key);
});

/* if (localStorage.getItem("nombre")) {
  nombreUsuario.innerHTML += localStorage.getItem("nombre");
}
if (localStorage.getItem("edad")) {
  edadUsuario.innerHTML += localStorage.getItem("edad");
}
if (localStorage.getItem("direccion")) {
  direccionUsuario.innerHTML += localStorage.getItem("direccion");
}
if (localStorage.getItem("telefono")) {
  telefonoUsuario.innerHTML += localStorage.getItem("telefono");
}
if (localStorage.getItem("documento")) {
  documentoUsuario.innerHTML += localStorage.getItem("documento");
} */

ejecutar.onclick = () => {
  cambiarDatos();
};

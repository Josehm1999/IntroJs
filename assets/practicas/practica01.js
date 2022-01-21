/*
 * 1- Por medio de un boton pedimos al usuario el nombre
 * 2- Despúes del prompt del nombre aparecen más prompt
 * 3- Edad, dirección, documento, telefono
 * 4- En un alert concatenando el siguiente mensaje
 * 5- Hola + nombre + tu edad es : + edad + direccion es :+
 * dirección + tu numero telefonico es : +telefono + y tu documento es + documento
 * */

const nombreUsuario = () => {
  const nombreUsuario = prompt("Cual es tu nombre?");
  const edadUsuario = prompt("Cual es tu edad?");
  const direccionUsuario = prompt("Cual es tu direccion?");
  const documentoUsuario = prompt(
    "Cual es el numero de tu documento de identidad?"
  );
  const telefonoUsuario = prompt("Cual es tu numero de telefono?");
  alert(`Hola ${nombreUsuario}:
  \nTu edad es: ${edadUsuario}
  \nTu direccion es: ${direccionUsuario}
  \nTu numero telefonico es: ${telefonoUsuario}
  \nTu documento es: ${documentoUsuario}`);
  console.log(`Hola ${nombreUsuario}:
  \nTu edad es: ${edadUsuario}
  \nTu direccion es: ${direccionUsuario}
  \nTu numero telefonico es: ${telefonoUsuario}
  \nTu documento es: ${documentoUsuario}`);
};

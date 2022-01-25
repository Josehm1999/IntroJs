// promp donde signemos 6 ciudades

let btnEjecutar = document.getElementById("btnEjecutar");
let btnShow = document.getElementById("btnShow");
let nombreCiudades = document.getElementById("nombreCiudades");
const array = [];

btnEjecutar.onclick = () => {

  for (let i = 0; i < 6; i++) {
    array.push(prompt("Ingrese una ciudad"))
  }


};

btnShow.onclick = () => {
  if (array.length == 0) {
    alert("Primero ingrese alguna ciudad")
    return
  }
  for (let i = 0; i <= array.length - 1; i++) {
    nombreCiudades.innerHTML += `<li> ${array[i]}</li>`;
  }

};


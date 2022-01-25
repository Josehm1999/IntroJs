// fechas 

let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate(); // getDay() es el item de dia de la semana
let hora = fecha.getHours();
let minutes = fecha.getMinutes();
let segundos = fecha.getSeconds();

console.log(`${hora + ":" + minutes + ":" + segundos + " - " + dia + ":" + mes + ":" + anio}`);

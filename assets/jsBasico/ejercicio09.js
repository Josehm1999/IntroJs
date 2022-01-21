/*let ciudad = prompt("Ingresa tu ciudad");

switch (ciudad) {
  case "lima":
    alert("Clima templado");
    break;
  case "piura":
    alert(" Clima calido");
    break;
  default:
    alert("No ingreso una ciudad valida");
    break;
}*/

function getTranslateMap(x) {
  const obj = {
    a: "Stairs",
    b: "Teeth",
    c: "Head",
    d: "Lies",
    e: "Suit",
  };
  return obj[x.toLowerCase()] ?? "x not found";
}

console.log(getTranslateMap("b"));

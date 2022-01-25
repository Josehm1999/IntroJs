// DOM

let ejFor = document.getElementById("btnEjecutar")

// function 
const emergente = () => {
  for (let index = 0; index < 5; index++) {
    console.log("Hell world")
  }
}

ejFor.onclick = () => {
  emergente();
}

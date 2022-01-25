// Array


let personas = []
let animales = ["Perro", "Gato", "Serpiente", "Lobo", "Escorpion", "Conejo"];



/* animales.push("Ardilla")
animales.unshift("Tigre")
animales.pop() */
animales.splice(4, 12)

for (let i = 0; i < animales.length; i++) {
  console.log(animales[i])
}


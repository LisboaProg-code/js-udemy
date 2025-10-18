let carro = {
    "marca": "Lamborghini",
    "portas": 2,
    "rodas": 4
}

console.log(carro.marca)
console.log(carro.portas)
console.log(carro.rodas)

console.log("------------------")

let {marca: marcaCarro, portas: portasCarro, rodas: rodasCarro} = carro

console.log(marcaCarro)
console.log(rodasCarro)
console.log(portasCarro)
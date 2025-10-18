let onibus = {
    rodas: 8,
    limiteDePassageiros: 40,
    portas: 2
}

console.log(onibus.rodas)
console.log(onibus.limiteDePassageiros)
console.log(onibus.portas)

/* Destructuring */

console.log("---------------------")

let {rodas: rodasOnibus, limiteDePassageiros: limiteDePassageirosOnibus, portas: portasOnibus} = onibus


console.log(rodasOnibus)
console.log(limiteDePassageirosOnibus)
console.log(portasOnibus)
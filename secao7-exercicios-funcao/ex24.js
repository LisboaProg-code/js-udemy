function potencia(base, exp=2){
    console.log(Math.pow(base, exp))
}

potencia(2)
potencia(5)
potencia(2, 4)

let potenciacao = (bas, expo=2) => {
    return Math.pow(bas, expo)
}

console.log(potenciacao(3))
console.log(potenciacao(7))
console.log(potenciacao(3, 3))
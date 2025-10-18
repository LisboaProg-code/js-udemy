function sumEvenNumbers(numeros){
    let soma = 0
    for(let c = 0; c < numeros.length; c++){
        if (numeros[c] % 2 == 0){
            soma+=numeros[c]
        }
    }
    return soma
}
let nums = [-5, 10, 40, 54, 2]
console.log(sumEvenNumbers(nums))
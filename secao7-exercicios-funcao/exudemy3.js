function reverseString(texto){
    let qntd = texto.length - 1
    let novoTexto = ""
    for(let c = qntd; c >= 0; c--){
        novoTexto += texto[c]
    }
    return novoTexto
}

console.log(reverseString("hello"))
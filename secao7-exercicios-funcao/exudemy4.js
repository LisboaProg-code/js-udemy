function countVowels(texto){
    let textoMin = texto.toLowerCase()
    let vogais = ["a", "b", "c", "d", "e"]
    let cont = 0
    for(let c = 0; c <= texto.length - 1; c++){
        if(textoMin[c] === "a" || textoMin[c] === "e" || textoMin[c] === "i" || textoMin[c] === "o" || textoMin[c] === "u" ){
            cont +=1
        }
    }
    return cont
}

console.log(countVowels("Lisboa"))

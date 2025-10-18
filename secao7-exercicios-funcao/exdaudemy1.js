function isPalindrome(palavra){
    let palavraMin = palavra.toLowerCase()
    let palindromo = ""
    let qntd = palavraMin.length
    for(let c = (qntd-1); c >= 0; c--){
        palindromo += palavraMin[c] 
    }
    return palindromo.toLowerCase() === palavraMin
}

function autoEscola(idade){
    if (idade >= 18){
        console.log("Pode entrar na auto escola")
    }else{
        console.log("Não pode entrar!")
    }
}

autoEscola(19)
autoEscola(15)

let testeAutoEscola = (idade) => {
    if (idade >= 18){
        return "Pode entrar!"
    }else{
        return "Não pode entrar"
    }
}

console.log(testeAutoEscola(25))
console.log(testeAutoEscola(10))
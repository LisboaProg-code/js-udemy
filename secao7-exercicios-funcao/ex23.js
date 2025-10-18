function tamanhoDoTexto(texto){
    let tamanho = texto.length
    if(tamanho > 10){
        console.log("Texto muito longo")
    }else{
        console.log("Texto dentro do limite")
    }
}

tamanhoDoTexto("Mario")
tamanhoDoTexto("Engenheiro de Software")
tamanhoDoTexto("Cientista da computação")
tamanhoDoTexto("Lisboa")

let checagemDeTamanho = (texto2) => {
    if(texto2.length > 10){
        return "Texto muito longo"
    }else{
        return "Texto dentro do limite"
    }
}

console.log(checagemDeTamanho("Mario Lisboa"))
console.log(checagemDeTamanho("Tayanna"))
console.log(checagemDeTamanho("Luna"))
console.log(checagemDeTamanho("Ivandro Lisboa"))
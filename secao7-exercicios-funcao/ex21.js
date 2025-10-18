function detectorDeTipoDeDado(dado){
    let tipo = typeof(dado)
    if(tipo === "string"){
        return "Seu dado é do tipo STRING"
    }else if (tipo === "number"){
        return "Seu dado é do tipo NUMBER"
    }else{
        return "Seu dado é do tipo BOOLEAN"
    }
}

console.log(detectorDeTipoDeDado("Mario"))
console.log(detectorDeTipoDeDado(15))
console.log(detectorDeTipoDeDado(true))

let tipagemDosDados = (dadoRecebido) => {
    if(typeof(dadoRecebido) === "string"){
        return "TIPO STRING"
    }else if(typeof(dadoRecebido) === "number"){
        return "TIPO NUMBER"
    }else{
        return "TIPO BOOLEAN"
    }
}

console.log(tipagemDosDados(16))
console.log(tipagemDosDados("Lisboa"))
console.log(tipagemDosDados(false))
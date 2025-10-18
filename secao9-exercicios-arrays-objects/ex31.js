function verificadorDeTamanhoDeArray(array){
    if(array.length >= 5){
        console.log("Muitos elementos dentro desta array")
    }
    else{
        console.log("Poucos elementos dentro dessa array")
    }
}


let meuNome = ["Mario", "Neves", "Lisboa", "Neto"]
let meusNovosAmigos = ["Pedro", "Heloysa", "Emilly", "Rihanna", "Nicolly", "Cauê"]

verificadorDeTamanhoDeArray(meuNome)
verificadorDeTamanhoDeArray(meusNovosAmigos)
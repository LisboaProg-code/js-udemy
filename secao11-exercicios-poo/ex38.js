class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    set atualizarRua(novaRua){
        this.rua = novaRua
    }
    set atualizarBairro(novoBairro){
        this.bairro = novoBairro
    }
    set atualizarCidade(novaCidade){
        this.cidade = novaCidade
    }
    set atualizarEstado(novoEstado){
        this.estado = novoEstado
    }

}

let minhaRua = "Rua Tereza Nicolau Cavalcante"
let meuBairro = "Malvinas"
let minhaCidade = "Campina Grande"
let meuEstado = "Paraíba - PB"

let meuEndereco = new Endereco(minhaRua, meuBairro, minhaCidade, meuEstado)

meuEndereco.atualizarBairro = "Catolé"

console.log(meuEndereco)

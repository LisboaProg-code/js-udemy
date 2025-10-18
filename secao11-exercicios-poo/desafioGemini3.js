class Produto {
    constructor(nome, precoCusto, estoque) {
        this._nome = nome
        this._precoCusto = precoCusto
        this._margemLucro = 0.25
        this._estoque = estoque
    }

    getPrecoCusto(){
        return this._precoCusto
    }

    calcularPrecoVenda(){
        let precoVenda = this.getPrecoCusto() * (1 + this._margemLucro)
        return precoVenda
    }

    vender(quantidade){
        if(quantidade <= this._estoque){
            let precoVendaQuantidade = this.calcularPrecoVenda() * quantidade
            this._estoque -= quantidade

            return precoVendaQuantidade
        }
        else{
            return "Erro. Quantidade insuficiente no estoque"
        }
    }

    getEstoque(){
        return this._estoque
    }

    getNome(){
        return this._nome
    }

}

class ProdutoPerecivel extends Produto {
    constructor(diasValidade, nome, precoCusto, estoque) {
        super(nome, precoCusto, estoque)
        this._diasValidade = diasValidade
    }

    calcularPrecoVenda(){
        let precoVendaPadrao = super.calcularPrecoVenda()
        if(this._diasValidade < 2){
            let desconto = (precoVendaPadrao * 30) / 100
            return precoVendaPadrao - desconto
        }
        else if(this._diasValidade <= 5){
            let desconto = (precoVendaPadrao * 15) / 100
            return precoVendaPadrao - desconto
        }
        else if(this._diasValidade <= 10){
            let desconto = (precoVendaPadrao * 5) / 100
            return precoVendaPadrao - desconto
        }
        else{
            return precoVendaPadrao
        }
    }

    venderComVigilancia(quantidade){

        if(this._diasValidade < 2){
            return "Venda proibida por Risco Sanitário"
        }

        const resultadoDaVenda = super.vender(quantidade)

        return resultadoDaVenda
    }

}

class ProdutoImportado extends Produto {
    constructor(taxaImportacao, nome, precoCusto, estoque) {
        super(nome, precoCusto, estoque)
        this._taxaImportacao = taxaImportacao
    }

    calcularPrecoVenda(){
        let precoVendaPadrao = super.calcularPrecoVenda()
        
        let novaMargemDeLucro = this._precoCusto * 0.10

        let imposto = this._precoCusto * this._taxaImportacao

        return precoVendaPadrao + novaMargemDeLucro + imposto

    }

}
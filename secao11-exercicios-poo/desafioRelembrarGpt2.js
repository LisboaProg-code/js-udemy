class ContaBancaria{
    constructor(titular, saldo){
        this._titular = titular
        this._saldo = saldo
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor
            return this._saldo
        }
        else{
            return "valor inválido"
        }
    }

    sacar(valor){
        if(this._saldo > 0){
            this._saldo -= valor
            return valor
        }
        else{
            return 0
        }
    }

    getSaldo(){
        return `Saldo atual: ${this._saldo}`
    }

}

class ContaCorrente extends ContaBancaria{
    constructor(titular, saldo, limite){
        super(titular, saldo)
        this._limite = limite
    }

    sacar(valor){ /* pode sacar se o valor for até a soma do saldo mais limite *100 + 200 = 300* */
        if(valor < this._saldo + limite){
            super.sacar(valor)
        }
    }

}

class ContaPoupanca extends ContaBancaria{
    constructor(titular, saldo, taxaRendimento){
        super(titular, saldo)
        this._taxaRendimento = taxaRendimento
    }

    aplicarRendimento(){
        this._saldo += this._saldo * this._taxaRendimento
    }

}

class CalculadorTaxa{
    constructor(taxa){
        this._taxa = taxa
    }

    calcular(valor){
        taxaFinal = this._taxa * valor
        return taxaFinal
    }
}

class TaxaTransferencia extends CalculadorTaxa{
    constructor(taxa){
        super(taxa)
    }

    calcular(valor){
        let taxa = super.calcular(valor)

        if(taxa > 1000){
            taxa*=2
        }

        return taxa
    }

}


class ContaBancaria {

    #saldo
    #historicoTransacoes

    constructor(saldoDaConta) {
        this.#saldo = saldoDaConta
        this.#historicoTransacoes = [] /* .push() */
    }

    _registrarTransacao(tipo, valor){

        const dataAtual = new Date()

        const transacao = {
            tipo: tipo,
            valor: valor, 
            data: dataAtual
        }

        this.#historicoTransacoes.push(transacao)
    } 

    getHistorico(){
        let copiaHistorico = this.#historicoTransacoes.slice(0)
        return copiaHistorico
    }

    getSaldo(){
        return this.#saldo
    }

    depositarValor(valor){
        if(valor > 0){
            this.#saldo += valor

            this._registrarTransacao("DEPÓSITO", valor)

        }else{
            return "Valor de depósito inválido"
        }

    }

    sacarInterno(valor){
        this.#saldo -= valor
        this._registrarTransacao("SAQUE", valor)
    }

    rendimentoInterno(valor){
        this.#saldo += valor
        this._registrarTransacao("RENDIMENTO", valor)
    }

}

class ContaCorrente extends ContaBancaria {
    #limiteCheque
    constructor(saldoDaConta, limite) {
        super(saldoDaConta)
        this.#limiteCheque = limite
    }
    
    sacar(valor){
        const saldoTot = this.getSaldo() + this.#limiteCheque
        let valorfinal = valor
        
        if(valor > saldoTot){
            return "Saque excede limite e saldo disponível"
        }

        const saldoAposSaque = this.getSaldo() - valor

        if(saldoAposSaque < 0){
            valorfinal += 10
            this._registrarTransacao("TAXA CHEQUE", 10)
        }

        super.sacarInterno(valorfinal)

    }

}

class ContaPoupanca extends ContaBancaria{
    #taxaRendimento
    constructor(saldoDaConta){
        super(saldoDaConta)
        this.#taxaRendimento = 0.005
    }

    aplicaRendimento(){
        let rendimento = (this.getSaldo() * 0.005) 

        super.rendimentoInterno(rendimento)

    }

    sacar(valor){
        if(valor <= this.getSaldo()){
            super.sacarInterno(valor)
        }
        else{
            return "Saque Negado! Conta poupança não pemite débito além do saldo"
        }

    }

}
class ContaBancaria {
    constructor(id, saldo) {
        this.numeroConta = id
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    sacar(valor){
        if(valor <= this.saldo){
            this.saldo -= valor
        }
        else if(valor > this.saldo){
            return "O saldo é insuficiente"
        }

    }

    consultarSaldo(){
        return this.saldo
    }
}

let minhaConta = new ContaBancaria(12345, 500)

minhaConta.depositar(200)
console.log(minhaConta.consultarSaldo())

minhaConta.sacar(400)
console.log(minhaConta.consultarSaldo())

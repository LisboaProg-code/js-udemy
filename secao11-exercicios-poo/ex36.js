class Nubank {
    constructor(saldo){
        this.saldo = saldo
    }

    deposito(valor){
        this.saldo += valor
    }

    saque(valor){
        this.saldo -= valor
    }
}

let dinheiro = new Nubank(150)

console.log(`Meu saldo inicial é R$${dinheiro.saldo}`)

dinheiro.deposito(100)
console.log(`Após o deposito, meu saldo ficou R$${dinheiro.saldo}`)

dinheiro.saque(100)
console.log(`Após o saque, meu saldo ficou R$${dinheiro.saldo}`)

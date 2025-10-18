class contaBancaria {
    constructor (saldoC, saldoP, jurosP){
        this.saldoC = saldoC
        this.saldoP = saldoP 
        this.jurosP = jurosP
    }

    deposito(valor, tipoConta){
        if(tipoConta == "C"){
            this.saldoC += valor
        }
        else if(tipoConta == "P"){
            this.saldoP += valor
        }
    }

    sacar(valor, tipoConta){

        if(tipoConta === "P"){
            if(valor > this.saldoP){
                console.log('Saldo insuficiente')
                return
            }
            this.saldoP -= valor
        }
        else if(tipoConta === "C"){
            if(valor > this.saldoC){
                console.log('Saldo insuficiente')
                return
            }
            this.saldoC -= valor
        }
        
    }


    transferencia(valor){

        if(valor > this.saldoP){
            console.log("Saldo Insuficiente")
            return
        }

        this.saldoP -= valor
        this.saldoC += valor
    }

    aplicarJuros(mes){
        this.saldoP += (this.saldoP * this.jurosP) * mes
    }

}

class ContaEspecial extends contaBancaria{
    constructor(saldoC, saldoP,jurosP){
        super(saldoC, saldoP, jurosP * 2)
    }
}

let saldoC = 0
let saldoP = 0

let minhaConta = new contaBancaria(saldoC, saldoP, 0.5)

minhaConta.deposito(100, "C")
minhaConta.deposito(200, "P")

console.log(minhaConta.saldoC)
console.log(minhaConta.saldoP)


minhaConta.sacar(50, "C")
minhaConta.sacar(100, "P")

console.log(minhaConta.saldoC)
console.log(minhaConta.saldoP)


minhaConta.transferencia(50)
console.log(minhaConta.saldoC)
console.log(minhaConta.saldoP)


console.log(minhaConta.saldoP)
minhaConta.aplicarJuros(2)
console.log(minhaConta.saldoP)


let minhaContaEspecial = new ContaEspecial(0, 100, 0.5)

minhaContaEspecial.aplicarJuros(3)
console.log(minhaContaEspecial.saldoP)


class Voo {
    constructor(codigoVoo, origem, destino, assentosDisponiveis) {
        this.codigoVoo = codigoVoo
        this.origem = origem
        this.destino = destino
        this.assentosDisponiveis = assentosDisponiveis
    }

    reservarAssento(){
        if(this.assentosDisponiveis > 0){
            this.assentosDisponiveis -= 1
            return "feito!"
        }
    }

    consultarAssentosDisponivel(){
        return this.assentosDisponiveis
    }
}

let Voo256 = new Voo(12345, "Manaus, AM", "Campina Grande, PB", "5")

Voo256.reservarAssento()
Voo256.reservarAssento()
Voo256.reservarAssento()
console.log(Voo256.consultarAssentosDisponivel())

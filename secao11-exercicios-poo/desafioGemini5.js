class VeiculoTransporte{
    constructor(placa, capacidadeMax, passageirosAtuais, velocidadeAtual){
        this._placa = placa
        this._capacidadeMax = capacidadeMax
        this._passageirosAtuais = passageirosAtuais
        this._velocidadeAtual = velocidadeAtual
    }

    embarcar(quantidade){
        let adicionar = quantidade
        let espacoLivre = this._capacidadeMax - this._passageirosAtuais
        
        if(espacoLivre <= 0){
            return 0
        }
        
        let embarcados = Math.min(adicionar, espacoLivre)

        this._passageirosAtuais += embarcados

        return embarcados

    }

    desembarcar(quantidade){
        let desembarcados = Math.min(quantidade, this._passageirosAtuais)

        this._passageirosAtuais -= desembarcados

        return desembarcados
    }

    acelerar(incremento){
        this._velocidadeAtual += incremento
        return `Velocidade atual ${this._velocidadeAtual}km/h`
    }

    frear(){
        this._velocidadeAtual *= 0
        return "Freiou"
    }

    getLotacaoAtual(){
        return `${this._passageirosAtuais} de ${this._capacidadeMax}`
    }

}

class OnibusUrbano extends VeiculoTransporte {
    constructor(placa, capacidadeMax, passageirosAtuais, velocidadeAtual, tipoCombustivel) {
        super(placa, capacidadeMax, passageirosAtuais, velocidadeAtual)
        this._tipoCombustivel = tipoCombustivel
    }

    acelerar(incremento){
        if(this._tipoCombustivel == "Diesel"){
            return this._velocidadeAtual += incremento
        }
        else if(this._tipoCombustivel == "Híbrido"){
            let adicionalIncremento = incremento + ((incremento * 50) / 100)
            return this._velocidadeAtual += adicionalIncremento
        }
    }

    aplicarManutencao(){
        this._velocidadeAtual *= 0
        this._passageirosAtuais *= 0
        return "Parada para manutenção"
    }

}

class VanEscolar extends VeiculoTransporte {
    constructor(placa, capacidadeMax, passageirosAtuais, velocidadeAtual, faixaEtariaPermitida) {
        super(placa, capacidadeMax, passageirosAtuais, velocidadeAtual)
        this._faixaEtariaPermitida = faixaEtariaPermitida
    }

    embarcar(quantidade){
        if(quantidade > ((this._capacidadeMax * 50) / 100) && this._passageirosAtuais > 0) {
            return "Embarque proibido"
        }
        else{
            let embarcarPadrao = super.embarcar(quantidade)
            return embarcarPadrao
        }
    }

}

class CalculadorTarifa {
    constructor(tarifaBase) {
        this._tarifaBase = tarifaBase
    }

    calcularCustoFinal(){
        return this._tarifaBase
    }

    calcularTroco(valorPago){
        return valorPago - this.calcularCustoFinal()
    }

}

class TarifaEstudante extends CalculadorTarifa {
    constructor(tarifaBase) {
        super(tarifaBase)
    }

    calcularCustoFinal(){
        let custoFinal = super.calcularCustoFinal()
        let desconto = (custoFinal * 50) / 100
        return custoFinal - desconto
    }

}

class TarifaNoturna extends CalculadorTarifa {
    constructor(tarifaBase) {
        super(tarifaBase)
    }

    calcularCustoFinal(){
        let tarifaBase = super.calcularCustoFinal()
        if(tarifaBase > 4){
            return tarifaBase + 0.50
        }
        else if(tarifaBase <= 4){
            return tarifaBase
        }
    }

}
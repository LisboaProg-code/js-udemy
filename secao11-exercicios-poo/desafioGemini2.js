class ServicoDeTranca{
    constructor(nomeP, precoBaseP, tempoMedioHorasP, materiaisNecessariosP){
        this.nome = nomeP
        this.precoBase = precoBaseP
        this.tempoMedioHoras = tempoMedioHorasP
        this.materiaisNecessarios = materiaisNecessariosP
    }

    calcularPrecoTotal(comprimento){
        let adicional = Math.trunc(comprimento/10) * 1
        let precoAdicional = this.precoBase + adicional
        return precoAdicional
    }

}


class TrancaCompleta extends ServicoDeTranca {
    constructor(nomeP, precoBaseP, tempoMedioHorasP, materiaisNecessariosP, fiosUsados) {
        super(nomeP, precoBaseP, tempoMedioHorasP, materiaisNecessariosP)
        this._fiosUsados = fiosUsados
    }

    calcularPrecoTotal(comprimento){
        let precoTotAdicional = super.calcularPrecoTotal(comprimento)
        let precoFios = this._fiosUsados * 30
        let precoTot = precoTotAdicional + precoFios

        return precoTot
    }

}

class AgendaTrancista{
    constructor(){
        this._filaDeEspera = []
    }


    agendarServico(nomeCliente, servico){

        const agendamento = {
            cliente: nomeCliente,
            servico: servico,
            status: "Agendado"
        }

        this._filaDeEspera.push(agendamento)

    }

    iniciarAtendimento(){
        let proximoAtendimento = this._filaDeEspera.shift()

        if(proximoAtendimento){
            proximoAtendimento.status = "Em Andamento"
        }

        return proximoAtendimento

    }

    static formatarTempoTotal(servicos){
        
    }

}
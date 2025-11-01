class Funcionario {
    constructor(nome, matricula, salarioBase, anoContratacao) {
        this._nome = nome
        this._matricula = matricula
        this._salarioBase = salarioBase
        this._anoContratacao = anoContratacao
    }

    calcularSalarioAnual(){
        return this._salarioBase * 12
    }

    calcularBonusAnual(){
        return (this._salarioBase * 5) / 100
    }

    calcularAntiguidade(){
        let anoAtual = 2025
        return anoAtual - this._anoContratacao
    }

}

class Desenvolvedor extends Funcionario {
    constructor(nome, matricula, salarioBase, anoContratacao, linguagemPrincipal, senioridade) {
        super(nome, matricula, salarioBase, anoContratacao)
        this._linguagemPrincipal = linguagemPrincipal
        this._senioridade = senioridade
    }

    calcularBonusAnual(){
        if(this._senioridade == "Júnior"){
            let bonusPadrao = super.calcularBonusAnual()
            return bonusPadrao + 100
        }
        else if(this._senioridade == "Pleno"){
            let bonusPadrao = super.calcularBonusAnual()
            let anoAntiguidade = super.calcularAntiguidade()
            let adicionalAno = anoAntiguidade * 50
            return bonusPadrao + adicionalAno
        }
        else if(this._senioridade == "Sênior"){
            return ((this._salarioBase * 15) / 100)
        }
    }

}

class GerenteDeProdutos extends Funcionario{
    constructor(nome, matricula, salarioBase, anoContratacao, projetosLiderados){
        super(nome, matricula, salarioBase, anoContratacao)
        this._projetosLiderados = projetosLiderados
        this._taxaComissaoProjeto = 0.02
    }

    calcularBonusAnual(){
        let bonusPadrao = super.calcularBonusAnual()

        const projetosParaComissao = Math.min(this._projetosLiderados, 5)
        let comissao = this._salarioBase * this._taxaComissaoProjeto
        let bonusComissao = comissao * projetosParaComissao

        return bonusPadrao + bonusComissao

    }

    calcularSalarioAnual(){
        let salarioAnualPadrao = super.calcularSalarioAnual()
        let antiguidade = super.calcularAntiguidade()
        let adicionalAno = antiguidade * 1000
        return salarioAnualPadrao + adicionalAno 
    }

}
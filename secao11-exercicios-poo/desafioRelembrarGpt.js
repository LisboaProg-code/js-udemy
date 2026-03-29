class ItemBiblioteca{
    constructor(titulo, totalExemplares, exemplaresDisponiveis){
        this._titulo = titulo
        this._totalExemplares = totalExemplares
        this._exemplaresDisponiveis = exemplaresDisponiveis
    }

    emprestar(qntd){
        /* 
        
        nn pd emprestar mais do que tem 
        retorna o quanto q foi emprestado

        */

        if(qntd > this._exemplaresDisponiveis){
            return "Não temos exemplares o suficiente"
        }
        else{
            this._exemplaresDisponiveis -= qntd
            return qntd
        }

    }

    devolver(qntd){

        /* aumenta os disponiveis */

        this._exemplaresDisponiveis = Math.min(
            this._exemplaresDisponiveis + qntd, this._totalExemplares
        )

    }

    getDisponibilidade(){
        /* vai ficar mais ou menos assim "X de Y (3 de 5 [exemplo])" */

        return `${this._exemplaresDisponiveis} de ${this._totalExemplares}`

    }

}

class Livro extends ItemBiblioteca{
    constructor(titulo, totalExemplares, exemplaresDisponiveis, autor){
        super(titulo, totalExemplares, exemplaresDisponiveis)
        this._autor = autor
    }

    getInfo(){
        return `${this._titulo} - ${this._autor}`
    }

    emprestar(qntd){
        if(qntd > 3){
            return "Empréstimo negado"
        }
        
        return super.emprestar(qntd)

    }
    
}

class Revista extends ItemBiblioteca{
    constructor(titulo, totalExemplares, exemplaresDisponiveis, edicao){
        super(titulo, totalExemplares, exemplaresDisponiveis)
        this._edicao = edicao
    }

    emprestar(qntd){
        if(qntd > 3){
            return 0
        }
        
        return super.emprestar(qntd)

    }

    getInfo(){
        return `${this._titulo} - edição ${this._edicao}`
    }

}

class CalculadorMulta{
    constructor(valorDeBase){
        this._valorDeBase = valorDeBase
    }

    calcularMulta(diasDeAtraso){
        let multa = this._valorDeBase * diasDeAtraso
        return multa
    }

    calcularTotal(diasDeAtraso){
        return this.calcularMulta(diasDeAtraso)
    }

}

class MultaEstudantil extends CalculadorMulta{
    constructor(valorDeBase){
        super(valorDeBase)
    }

    calcularTotal(diasDeAtraso){
        return this.calcularMulta(diasDeAtraso) * .5
    }

}   

/* testesss */

let meuLivro = new Livro("Noites Brancas", 5, 5, "Fiódor Dostoievisky")

console.log(meuLivro.getDisponibilidade())

meuLivro.emprestar(2)

console.log(meuLivro.getDisponibilidade())

console.log("----------------------------------------------")

/* ----livros--- */

let minhaRevista = new Revista("Amo minha mulher", 7, 6, 13)

console.log(minhaRevista.getInfo())

minhaRevista.emprestar(4) /* negar */

console.log(minhaRevista.getInfo())

console.log("----------------------------------------------")

/* --revistass-- */

let tuaMulta = new CalculadorMulta(20)

console.log(tuaMulta.calcularMulta(5))
console.log(tuaMulta.calcularTotal(5))

let multaEstudantil = new MultaEstudantil(20)

console.log(multaEstudantil.calcularMulta(5))
console.log(multaEstudantil.calcularTotal(5))
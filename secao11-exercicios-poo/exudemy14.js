class Livro {
    constructor(titulo, autor, disponivel) {
        this.titulo = titulo
        this.autor = autor
        this.disponivel = disponivel
    }

    emprestar(){
        if(this.disponivel == true){
            this.disponivel = false
        }
        else{
            return "Indisponível"
        }
    }

    devolver(){
        if(this.disponivel == false){
            this.disponivel = true
        }
    }

    consultarDisponibilidade(){
        return this.disponivel
    }
}

let noitesBrancas = new Livro("Noites Brancas", "Dostoievsky", true)


noitesBrancas.emprestar()
console.log(noitesBrancas.consultarDisponibilidade())

noitesBrancas.devolver()
console.log(noitesBrancas.consultarDisponibilidade())

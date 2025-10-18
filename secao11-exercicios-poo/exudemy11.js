
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura
        this.altura = altura
    }

    calcularArea(){
        return this.altura * this.largura
    }

    calcularPerimetro(){
        return (2 * (this.largura + this.altura))
    }
}

let meuRetangulo = new Retangulo(5, 4)

let area = meuRetangulo.calcularArea()
let perimetro = meuRetangulo.calcularPerimetro()

console.log(area)
console.log(perimetro)
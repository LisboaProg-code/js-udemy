class Carro{
    constructor (marca, cor, gasolina){
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
    }

    dirigindoCarro(kmRodado){
        for(let i = 0; i < kmRodado; i++){
            if(this.gasolina === 0){
                console.log("O carro não pode andar, pois está sem gasolina")
                return
            }
            
            this.gasolina -= 1
        }
    }

    abastecendoCarro(qntdAbastecer){
        this.gasolina += qntdAbastecer
    }
}

let meuCarro = new Carro("Nissan GTR", "Preto", 20)

meuCarro.dirigindoCarro(10)

console.log(meuCarro.gasolina)

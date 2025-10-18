class CartShop{
    constructor(items, qntdItems, valorTot){
        this.items = items
        this.qntdItems = qntdItems
        this.valorTot = valorTot
    }

    adicionar(item){
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === item.id) {
                this.items[i].qntd += item.qntd
                this.qntdItems += item.qntd
                this.valorTot += item.preco * item.qntd
                return 
            }
        }
        this.items.push(item)
        this.qntdItems += item.qntd
        this.valorTot += (item.preco * item.qntd) 
    }
    
    remover(id){
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].id === id){
                this.qntdItems -= this.items[i].qntd
                this.valorTot -= (this.items[i].preco * this.items[i].qntd)
                this.items.splice(i, 1)
                break
            }
         }
    }

}

let itens = [
    {
        id: 1,
        nome: "Camisa oversized Azul",
        preco: 30,
        qntd: 3
    },
    {   
        id: 2,
        nome: "Camisa oversized Preta",
        preco: 35 ,
        qntd: 1
    },
    {
        id: 3,
        nome: "Camisa oversized Branca",
        preco: 35,
        qntd: 2 
    },
    {
        id: 4,
        nome: "Calça Cargo",
        preco: 75,
        qntd: 1
    },
    {
        id: 5,
        nome: "Boné",
        preco: 30,
        qntd: 3
    },

]

let qntdItens = 0
let valorTot = 0
let novoItem = {id: 6, nome: "Tenis", preco: 65, qntd: 3}

for(let i = 0; i < itens.length; i++){
    qntdItens += itens[i].qntd
}

for(let i = 0; i < itens.length; i++){
    valorTot += (itens[i].preco * itens[i].qntd)
}

let meuCarrinho = new CartShop(itens, qntdItens, valorTot)

let novoitem2 = {id: 7, nome: "Bone 2", preco: 32, qntd: 3}

meuCarrinho.adicionar(novoItem)
meuCarrinho.adicionar(novoitem2)

meuCarrinho.remover(1)

console.log(meuCarrinho.items)
console.log(meuCarrinho.qntdItems)
console.log(meuCarrinho.valorTot)
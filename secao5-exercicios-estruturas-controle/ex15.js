let numero = 7
let qntd = 0
for(let cont = 1; cont <= numero ; cont++){
    if(numero % cont == 0){
        qntd++
    }
}

if(qntd > 2){
    console.log(`O número ${numero} não é primo pois é divisível por mais de 2 números`)
}
else{
    console.log(`O número ${numero} é primo pois é divisível somente por ele e por 1`)
}
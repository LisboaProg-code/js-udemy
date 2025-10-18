let idade = 15
let cnh = false

if(idade >= 18 && cnh == true){
    console.log("Você pode passar! Não encontramos nada de errado nos seus documentos!")
} 
else if(idade >= 18 && cnh == false){
    console.log("O carro será revogado pois mesmo que tenha a idade permitida para dirigir, não tem CNH")
}
else{
    console.log("Você terá o carro revogado e também nos seguirá para a delegacia. Pois não tem CNH e nem idade permitida para dirigir!")
}
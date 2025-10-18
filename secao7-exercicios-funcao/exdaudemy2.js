function calculateAverage(media){
    let soma = 0
    if (media.length == 0){
        return 0
    }else{
    for(let c = 0; c < media.length; c++){
        soma += media[c]
    }
    return soma/media.length}
}

let notas = [3, 30, 0, 100]
console.log(calculateAverage(notas))
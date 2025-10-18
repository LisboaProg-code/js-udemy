function sumUniqueNumbers(arr){
    let apareceuXVezes = {}
    arr.forEach(num => {
        if(num in apareceuXVezes){
            apareceuXVezes[num] += 1
        }else{
            apareceuXVezes[num] = 1
        }
    });
    
    let soma = 0
    for(let num in apareceuXVezes){
        if(apareceuXVezes[num] === 1){
            soma+= Number(num)
        }
    }
    
    return soma

}

let numeros = [1, 1, 2, 3, 4, 5, 6, 2, 5]

console.log(sumUniqueNumbers(numeros))
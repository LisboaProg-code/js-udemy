function findMaxNumber(arr){
    let maior = 0
    for(let i = 0; i < arr.length;i++){
        if (arr[i] > maior)[
            maior = arr[i]
        ]
    }
    return maior
}

let numeros = [1, 3, 5, 6, 7, 2, 4]
console.log(findMaxNumber(numeros))
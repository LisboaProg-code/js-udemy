function sumExclusiveByType(arr){
    let objectRes = {}
    let objDeUmaArray = {}
    arr.forEach(num => {
        if(num in objDeUmaArray){
            objDeUmaArray[num] += 1
        }
        else{
            objDeUmaArray[num] = 1
        }
    });

    let valoresUnicos = arr.filter(num => objDeUmaArray[num] === 1)
    let somaValoresUnicos = 0
    let alfabeto = ""
    for(let i = 0; i < valoresUnicos.length; i++){
        if(typeof(valoresUnicos[i]) === "number"){
            somaValoresUnicos += valoresUnicos[i]
        }
        else if(typeof(valoresUnicos[i]) === "string"){
            alfabeto += valoresUnicos[i]
        }
    }

    objectRes.numeros = somaValoresUnicos
    objectRes.letras = alfabeto.split("").sort().join("")
    
    return objectRes

}

let dados = [1, 2, 2, 3, "a", "b", "a", "c", 4]
console.log(sumExclusiveByType(dados))
function analyzeArrayData(arr){
    let objectRes = {}
    let arrParaObject = {}
    let soma = 0
    let string = ""
    
    arr.forEach(num => {
        if(num in arrParaObject){
            arrParaObject[num] += 1
        }
        else{
            arrParaObject[num] = 1
        }
    });

    let valoreoNaoUnicos = [...new Set(arr.filter(num => arrParaObject[num] > 1))].sort()
    
    let valoresUnicos = arr.filter(num => arrParaObject[num] === 1)


    for(let i = 0; i < valoresUnicos.length; i++){
        if(typeof(valoresUnicos[i]) === "number"){
            soma += valoresUnicos[i]
        }else if(typeof(valoresUnicos[i]) === "string"){
            string+= valoresUnicos[i]
        }
    }

    objectRes.duplicados = valoreoNaoUnicos.sort()
    objectRes.unicos = valoresUnicos
    objectRes.somaUnicos = soma
    objectRes.letrasUnicas = string.split("").sort().join("")

    return objectRes

}

let dados = [1, 2, 2, 3, "a", "b", "a", "c", 4, "d", "d"];
console.log(analyzeArrayData(dados))
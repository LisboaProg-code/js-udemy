    function removeDuplicates(arr){
        vistos = {}
        resultado = []
        arr.forEach(num => {
            if(!(num in vistos)){
                resultado.push(num)
                vistos[num] = true
            }
        });

        return resultado

    }

    let numeros = [1, 1, 2, 3, 4, 5, 6, 2, 5]
    console.log(removeDuplicates(numeros))
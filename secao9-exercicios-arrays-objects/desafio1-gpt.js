function filterUniqueValues(arr){

    let valoresUnicos = {}
    arr.forEach(num => {
        if(num in valoresUnicos){
            valoresUnicos[num] += 1
        }
        else{
            valoresUnicos[num] = 1
        }
    });

    let novoArr = arr.filter(num => valoresUnicos[num] === 1)

    return novoArr

}

let tudo = [1, 2, 2, 3, 4, "a", "a", "b", 5]

console.log(filterUniqueValues(tudo))
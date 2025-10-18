function removeRepeatedAndSort(arr){
    
    let valorUnico = {}
    arr.forEach(num => {
        if(num in valorUnico){
            valorUnico[num] += 1
        }
        else{
            valorUnico[num] = 1
        }
    });

    let novoArr = arr.filter(num => valorUnico[num] === 1)

    return novoArr.sort()

}

let tudo = [3, "b", 1, 2, "a", 3, "b", 4, 5, "c", "a"];
console.log(removeRepeatedAndSort(tudo))

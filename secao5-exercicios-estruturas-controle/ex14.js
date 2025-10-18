/* for(let c = 0; c <= 50; c++){
    if(c % 2 == 0){
        console.log(`O número ${c} é par`)
    }
    else{
        console.log(`O número ${c} é impar`)
    }
}
 */
let cont = 0

do{
    if(cont % 2 == 0){
        console.log(`O número ${cont} é par`)
    }
    else{
        console.log(`O número ${cont} é impar`)
    }

    cont++
}while(cont <= 50)
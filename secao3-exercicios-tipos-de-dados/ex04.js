/* Escreva três comparações com operadores lógicos. Com and, or e not */
let a = 5
let b = 10
console.log((a < b) && (b >= a)) /* (5 é menor que 10 == TRUE) e (10 é maior ou igual a 5 == TRUE) == True */
console.log((a < b) && (b <= a)) /* (5 é menor que 10 == TRUE) e (10 é menor ou igual a 5 == FALSE) == False */
console.log((a > b) || (b == a)) /* (5 é maior que 10 == FALSE) ou (10 é igual a 5 ==  FALSE) == False*/
console.log((a > b) || (b != a)) /* (5 é maior que 10 == FALSE) ou (10 é diferente de 5 == TRUE) == True*/
console.log(!(a+b == 16)) /* (10+5 == 15) == !(False) -> True*/
console.log(!(a+b == 15)) /* (10+5 == 15) == !(True) -> False */
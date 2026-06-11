//Calcule o fatorial de um número (`n! = n * (n-1) * ... * 1`). 123123

function fatorial(n) {
let resultado = 1
   for (let i = n; i >= 1; i--) {
   resultado *= i;
   } 
return resultado

}
console.log(fatorial(5))
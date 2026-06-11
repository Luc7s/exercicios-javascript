function fatorial(numero) {
let resultado = 1
   for (let i = numero; i >= 1; i--) {
    resultado = resultado * (i - 1) * numero
    console.log(resultado)
   } 
    
}
return fatorial(5)

//Calcule o fatorial de um número (`n! = n * (n-1) * ... * 1`).
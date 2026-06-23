let numeros = [2,4,6]
let divisor = numeros.length

let total = numeros.reduce(function(acc,num){
    return acc + num/numeros.length;
},0);

console.log(total)
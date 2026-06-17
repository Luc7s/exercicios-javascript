let numeros = [1, 2 , 3, 4];

let total = numeros.reduce(function(acc,num){
    return acc + num;
},0);
console.log(total)
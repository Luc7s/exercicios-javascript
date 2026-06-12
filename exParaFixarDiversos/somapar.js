function somapar(n){
    paratenses = [];
    let soma = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            soma = soma + i;
            paratenses.push(i);
        }
    }
    console.log(paratenses.join(','))
    console.log(`Soma: ${soma}`)
}
somapar(8)
function piramede(numero){
    for (let i = 0; i <= numero; i++) {
        let linha = '';
    for (let j = 0; j <= i; j++) {
        linha = linha + '*'
    }
console.log(linha)
}
}
piramede(2)
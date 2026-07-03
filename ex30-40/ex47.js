function ContadorDeFrequencia(palavra) {
    let resultado = {};
    for (let i = 0; i < palavra.length; i++) {
    let letras = palavra[i];
    if (resultado[letras] === undefined) {
        resultado[letras] = 0;
    }
    resultado[letras] = resultado[letras] + 1;
    }
    return resultado
}
console.log(ContadorDeFrequencia('banana'))
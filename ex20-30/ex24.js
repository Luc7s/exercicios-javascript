function vogais(texto){
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        letra = texto[i];

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        contador = contador + 1;
    }
}
return contador
}
console.log(vogais("casa"))

function consoante(texto){
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        letra = texto[i];
    if (!(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u")) {
        contador = contador + 1;
    }
    }
return contador

}
console.log(consoante("maradona"));

//! <-- significa nao
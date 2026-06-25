
function contador(lista,numeroRepetido){        let ValorGuardado = 0;


    for (i = 0; i < lista.length; i++) {
        if (lista[i] == numeroRepetido) {
        ValorGuardado = ValorGuardado + 1;
        }

    }
    return ValorGuardado;
}
console.log(contador([1, 2, 2, 3, 2], 2))
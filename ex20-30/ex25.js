function palindromo(texto){

    let invertido = texto.split("").reverse().join("")
    if (invertido === texto) {
        console.log("true")
    }
    else {
        console.log("false")
    }
    }
    return palindromo("arara")
function bissexto(ano) {
    if (ano %4 === 0 && ano >= 1982) {
        console.log("O ano é bissexto")
    } else {
        console.log("ano n bissexto")
    }
    
}
bissexto(2004)
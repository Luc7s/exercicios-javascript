function faixa(idade){
    if (idade < 0) {
        console.log ("Necessario idade ser maior que 0")
    } else if (idade <= 11 || idade == 0) {
        console.log("criança")
    } else if (idade <= 12 || idade <= 17) {
        console.log("adoslecente") }
    else if (idade <= 18 || idade <= 59) {
        console.log("adulto")
    }
    else {   
        console.log("Idoso")
    }

}
faixa(55)
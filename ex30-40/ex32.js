function teste(numeros){
    return numeros % 2 == 0
}
let filtroPar = [10,30,50,15,17].filter(teste)

console.log (filtroPar)
function triangulo(tipo){
    switch (tipo) {
        case "equilatero":
        console.log("todos os lados iguais")
            break;
        case "isosceles":
        console.log("todos os lados e angulos iguais")
            break;
        case "escaleno":
        console.log("td diferente")
            break;    
        default:
        console.log("triangulo da playstation")
        break;
    }
}
triangulo("")
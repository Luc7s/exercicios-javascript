function desconto(categoria, preco, resultado) {
var preco = 15
    switch (categoria) {
        case "vip":
        const resultadoVip = preco /30
        console.log(resultadoVip)
            break;
        case "estudante":
        const resultadoEstudante = preco /50
        console.log(resultadoEstudante)
            break;
        
        default:
        const resultadoComum = preco /10
        console.log(resultadoComum)
            break;
    }
    
}
desconto()
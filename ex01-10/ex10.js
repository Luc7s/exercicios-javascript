function aprovacao(nota)
 //coloquei o && no if porem nao foi e o codigo rodava sem dar o console log caso o codigo tivesse um numero negativo ou maior q 10
{
    if (nota < 0 || nota > 10) {
        console.log ("nota invalida, notas apenas de 0 a 10")
    } else if (nota < 5) {
        console.log("reprovado")
    }        
    else {
        console.log("aprovado")
    }
}
aprovacao(-1)

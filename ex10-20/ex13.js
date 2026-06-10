function calculadora(n1,n2,operador)
{
 switch (operador) {
    case "+":
        console.log(n1 + n2)
        break;
    case "*":
        console.log(n1*n2)
        break;
    case "-":
        console.log(n1-n2)
        break;
    case "/":
        console.log(n1/n2)
        break;
 
    default:
        break;
 }

}
calculadora(5,10, "/")
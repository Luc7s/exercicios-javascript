function inverter(n){
    let resultado = "";
    for (let i = n; i >= 0; i--) {
        resultado += i;
        console.log(resultado)
    if (i>0) {
        resultado += ",";
    }
    }
}
return inverter(5)
function validadorDeSenha(senha) {
        if(senha.length < 8){
        return false;}
    let temMaiuscula = false;
    let temNumero = false;
    for (let i = 0; i < senha.length; i++) {
        const carectere = senha[i];
    if (carectere === carectere.toUpperCase()) {
        temMaiuscula = true;
    }
    if (carectere >= '0' && carectere <= '9') {
        temNumero = true;
    }}
    if (temNumero && temMaiuscula) {
     return true;  }
    else{
        return false
    }
    }
console.log(validadorDeSenha('Teste1522'))
const prompt = require('prompt-sync')();
function jogoDaAdivinhacao() {
    palpite = 0;
    const numeroSecreto = Math.floor(Math.random() * 100) + 1
    while (palpite !== numeroSecreto) {
        palpite = Number(prompt('Um numero de 1 a 100:'))
        if (palpite < numeroSecreto) {
            console.log('Diga um numero maior')
        }
        if (palpite > numeroSecreto) {
            console.log('Diga um numero menor')
        }
    }
        console.log("parabens,você acertou" + numeroSecreto)

}
jogoDaAdivinhacao();
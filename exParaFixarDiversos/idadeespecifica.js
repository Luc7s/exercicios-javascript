const pessoas = 
    [{nome:"A", idade:15}, {nome:"B", idade:22}, {nome:"C", idade:17}];

function maiorDeIdade(numero) {
    let resultado = [];
    for (let i = 0; i < pessoas.length; i++) {
    let idade = pessoas[i].idade;
    let nome = pessoas[i].nome;
        if (idade >= numero) {
                resultado.push(pessoas[i]);

        }
    }
    return resultado  
    }
console.log(maiorDeIdade(18))
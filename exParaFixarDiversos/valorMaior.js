const pessoas = 
    [{nome:"A", idade:15}, {nome:"B", idade:22}, {nome:"C", idade:17}];
function maiorIdade() {
    let maior = 0;
    let maiorPessoa = null;
    for (let i = 0; i < pessoas.length; i++) {
        let idade = pessoas[i].idade;
                if (idade > maior) {
                    maior = idade;
                    maiorPessoa = pessoas[i];
                }
        
        }
        return maior
    }
console.log(maiorIdade())
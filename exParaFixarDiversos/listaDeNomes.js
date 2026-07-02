const pessoas = 
    [{nome:"A", idade:15}, {nome:"B", idade:22}, {nome:"C", idade:17}];
function listaDeNome() {
    let lista = [];
    let todosOsNomes = null;

    for (let i = 0; i < pessoas.length; i++) {
        const nomes = pessoas[i].nome;
        lista.push(nomes)
    }
    return lista
}
console.log(listaDeNome())
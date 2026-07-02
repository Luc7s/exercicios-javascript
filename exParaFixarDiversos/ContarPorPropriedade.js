const pessoas = 
    [{nome:"A", idade:15}, {nome:"B", idade:22}, {nome:"C", idade:17}];
function contarPorPropriedade() {
    let lista = [];
    let SomaDeTodos = 0;
    for (let i = 0; i < pessoas.length; i++) {
        const idade = pessoas[i].idade;
        let SomaDeTodos = idade.length
        lista.push(idade)
    
    }
    return lista
}
console.log(contarPorPropriedade())
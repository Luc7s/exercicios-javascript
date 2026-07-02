const pessoas = 
    [{nome:"A", idade:15}, {nome:"B", idade:22}, {nome:"C", idade:17}];

function SomarIdades() {
    let total = 0;
        for (let i = 0; i < pessoas.length; i++) {
    let idade = pessoas[i].idade;
    total = total + idade;
    }

    return total
}
console.log(SomarIdades())
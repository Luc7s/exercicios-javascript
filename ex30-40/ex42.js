const pessoas = [
  {nome:"A", idade:20}, 
  {nome:"B", idade:20}, 
  {nome:"C", idade:30}
];

function porIdade() {
    let resultado = {};
for (let i = 0; i < pessoas.length; i++) {
  let idade = pessoas[i].idade;
  let nome = pessoas[i].nome;

  if (resultado[idade] === undefined) {
    resultado[idade] = [];
  }
  resultado[idade].push(nome);
}
return resultado;
}
console.log(porIdade());
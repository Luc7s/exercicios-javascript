const vendas = [50, 200, 80, 300, 150, 30];

function usoDeTudo(lista){
    return lista.filter(venda => venda > 100).map(venda => venda *2).reduce((acumulador, vendas) => acumulador + vendas);
}
console.log(usoDeTudo(vendas))

// pega os acimas de 100 faz vezes 2 e soma tudo
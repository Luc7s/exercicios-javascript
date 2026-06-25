const lista = [
    { tarefa: "A", concluida: true  },
    { tarefa: "B", concluida: false },
    { tarefa: "C", concluida: true  }
]

function checador(lista) {
    let numero = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].concluida == true) {
            numero = numero + 1
        }        
    }
            return numero

}
console.log(checador(lista))
const conversorDeMoeda = {
    dolar: function(real){
        return real /5
    },
    euro: function(real){
        return 1/6
    }
}
console.log(conversorDeMoeda.dolar(100))